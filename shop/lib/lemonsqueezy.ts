import { lemonSqueezySetup, createCheckout } from "@lemonsqueezy/lemonsqueezy.js";

export function setupLemonSqueezy() {
  lemonSqueezySetup({ apiKey: process.env.LEMONSQUEEZY_API_KEY! });
}

export async function createProductCheckout(variantId: string, successUrl: string) {
  setupLemonSqueezy();

  const storeId = process.env.LEMONSQUEEZY_STORE_ID!;

  const checkout = await createCheckout(storeId, variantId, {
    checkoutOptions: {
      embed: false,
      media: true,
      logo: true,
    },
    checkoutData: {
      custom: {},
    },
    productOptions: {
      redirectUrl: successUrl,
      receiptButtonText: "Go to Dashboard",
      receiptThankYouNote: "Thank you! Check your email for the download link.",
    },
  });

  return checkout;
}
