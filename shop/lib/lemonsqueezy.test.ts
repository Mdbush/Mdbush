import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { lemonSqueezySetup, createCheckout } from "@lemonsqueezy/lemonsqueezy.js";
import { setupLemonSqueezy, createProductCheckout } from "@/lib/lemonsqueezy";

vi.mock("@lemonsqueezy/lemonsqueezy.js", () => ({
  lemonSqueezySetup: vi.fn(),
  createCheckout: vi.fn(),
}));

const setupMock = vi.mocked(lemonSqueezySetup);
const createCheckoutMock = vi.mocked(createCheckout);

beforeEach(() => {
  vi.clearAllMocks();
  vi.unstubAllEnvs();
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("setupLemonSqueezy", () => {
  it("configures the SDK with the API key from the environment", () => {
    vi.stubEnv("LEMONSQUEEZY_API_KEY", "ls-key");
    setupLemonSqueezy();
    expect(setupMock).toHaveBeenCalledWith({ apiKey: "ls-key" });
  });
});

describe("createProductCheckout", () => {
  it("sets up the SDK and creates a checkout for the given store and variant", async () => {
    vi.stubEnv("LEMONSQUEEZY_API_KEY", "ls-key");
    vi.stubEnv("LEMONSQUEEZY_STORE_ID", "store-42");
    const fakeCheckout = { error: null, data: { data: { attributes: { url: "https://checkout/x" } } } };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createCheckoutMock.mockResolvedValue(fakeCheckout as any);

    const result = await createProductCheckout("variant-9", "https://solokit.cloud/success");

    expect(setupMock).toHaveBeenCalledWith({ apiKey: "ls-key" });
    expect(createCheckoutMock).toHaveBeenCalledTimes(1);
    const [storeId, variantId, options] = createCheckoutMock.mock.calls[0];
    expect(storeId).toBe("store-42");
    expect(variantId).toBe("variant-9");
    expect(options?.productOptions?.redirectUrl).toBe("https://solokit.cloud/success");
    expect(options?.checkoutOptions?.embed).toBe(false);
    expect(result).toBe(fakeCheckout);
  });
});
