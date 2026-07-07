import { NextResponse } from "next/server";
import { socialPosts, type SocialPost } from "@/lib/social-queue";

const FB_PAGE_ID = "1098756576664555";

function getPostIndex(): number {
  // Count days since epoch and pick sequential post — cycles through the queue evenly
  const daysSinceEpoch = Math.floor(Date.now() / (24 * 60 * 60 * 1000));
  return daysSinceEpoch % socialPosts.length;
}

/**
 * Upload an image (by URL) to LinkedIn and return its asset URN.
 * LinkedIn requires a native asset (you can't reference an external URL for an
 * IMAGE share): register → fetch bytes → upload binary → reference the asset.
 */
async function uploadLinkedInImage(
  imageUrl: string,
  token: string,
  authorUrn: string
): Promise<string> {
  const reg = await fetch(
    "https://api.linkedin.com/v2/assets?action=registerUpload",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        registerUploadRequest: {
          recipes: ["urn:li:digitalmediaRecipe:feedshare-image"],
          owner: authorUrn,
          serviceRelationships: [
            {
              relationshipType: "OWNER",
              identifier: "urn:li:userGeneratedContent",
            },
          ],
        },
      }),
    }
  );
  if (!reg.ok) throw new Error(`registerUpload failed: ${await reg.text()}`);
  const regData = await reg.json();
  const asset: string = regData.value.asset;
  const uploadUrl: string =
    regData.value.uploadMechanism[
      "com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest"
    ].uploadUrl;

  const imgRes = await fetch(imageUrl);
  if (!imgRes.ok) throw new Error(`image fetch failed: ${imgRes.status}`);
  const bytes = await imgRes.arrayBuffer();

  const up = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/octet-stream",
    },
    body: bytes,
  });
  if (!up.ok) throw new Error(`image upload failed: ${up.status}`);
  return asset;
}

async function postToLinkedIn(post: SocialPost, token: string): Promise<void> {
  const profileRes = await fetch("https://api.linkedin.com/v2/userinfo", {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!profileRes.ok) throw new Error("LinkedIn profile fetch failed");
  const { sub: authorId } = await profileRes.json();
  const authorUrn = `urn:li:person:${authorId}`;

  // Best-effort image attach — fall back to a text-only post on any failure so a
  // transient image problem never blocks the post itself.
  let media: string | null = null;
  if (post.imageUrl) {
    try {
      media = await uploadLinkedInImage(post.imageUrl, token, authorUrn);
    } catch {
      media = null;
    }
  }

  const shareContent = media
    ? {
        shareCommentary: { text: post.text },
        shareMediaCategory: "IMAGE",
        media: [{ status: "READY", media }],
      }
    : {
        shareCommentary: { text: post.text },
        shareMediaCategory: "NONE",
      };

  const res = await fetch("https://api.linkedin.com/v2/ugcPosts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-Restli-Protocol-Version": "2.0.0",
    },
    body: JSON.stringify({
      author: authorUrn,
      lifecycleState: "PUBLISHED",
      specificContent: { "com.linkedin.ugc.ShareContent": shareContent },
      visibility: { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" },
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`LinkedIn post failed: ${err}`);
  }
}

async function postToFacebook(post: SocialPost, token: string): Promise<void> {
  const base = `https://graph.facebook.com/v19.0/${FB_PAGE_ID}`;
  // With an image, post a photo (caption carries the copy); otherwise a text feed post.
  const endpoint = post.imageUrl ? `${base}/photos` : `${base}/feed`;
  const body = post.imageUrl
    ? { url: post.imageUrl, caption: post.text, access_token: token }
    : { message: post.text, access_token: token };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Facebook post failed: ${err}`);
  }
}

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const linkedInToken = process.env.LINKEDIN_ACCESS_TOKEN;
  const facebookToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

  if (!linkedInToken && !facebookToken) {
    return NextResponse.json({ skipped: true, reason: "No social tokens configured" });
  }

  const post = socialPosts[getPostIndex()];
  const results: Record<string, string> = {};

  if (linkedInToken) {
    try {
      await postToLinkedIn(post, linkedInToken);
      results.linkedin = "posted";
    } catch (e) {
      results.linkedin = `failed: ${e}`;
    }
  }

  if (facebookToken) {
    try {
      await postToFacebook(post, facebookToken);
      results.facebook = "posted";
    } catch (e) {
      results.facebook = `failed: ${e}`;
    }
  }

  return NextResponse.json({
    ok: true,
    postIndex: getPostIndex(),
    hasImage: Boolean(post.imageUrl),
    results,
  });
}
