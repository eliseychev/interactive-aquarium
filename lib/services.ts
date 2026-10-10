import { productConfig, type FishPackage } from "@/config/product";

export interface AuthService {
  getMode(): "demo" | "configured";
  signIn(email: string): Promise<{ status: "demo" | "authenticated" }>;
  signUp(email: string): Promise<{ status: "demo" | "created" }>;
}

export interface AquariumService {
  getAccountSummary(): Promise<{
    aquariumCode: string;
    fishCreated: number;
    fishCredits: number;
  }>;
}

export interface PaymentService {
  getCheckoutAvailability(): "demo" | "configured";
  startCheckout(packageId: FishPackage["id"]): Promise<{ status: "unavailable" }>;
}

export const authService: AuthService = {
  getMode: () => "demo",
  signIn: async () => ({ status: "demo" }),
  signUp: async () => ({ status: "demo" }),
};

export const aquariumService: AquariumService = {
  getAccountSummary: async () => ({
    aquariumCode: "BLUE-4821",
    fishCreated: 0,
    fishCredits: productConfig.freeFishCount,
  }),
};

export const paymentService: PaymentService = {
  getCheckoutAvailability: () => "demo",
  startCheckout: async () => ({ status: "unavailable" }),
};
