import { MOCK_AUTH, MOCK_OTP_CODE } from "@/features/auth/constants";
import type {
  LoginPayload,
  LoginResponse,
  SignUpPayload,
  SignUpResponse,
  VerifyOtpPayload,
  VerifyOtpResponse,
  ResendOtpPayload,
  ResendOtpResponse,
  User,
} from "@/features/auth/types/auth";
import apiClient from "@/services/ApiClient";
//to mock API
const wait = (ms = 600) => new Promise((r) => setTimeout(r, ms));

export const authApi = {
  async login(payload: LoginPayload): Promise<LoginResponse> {
    if (MOCK_AUTH) {
      await wait();
      return { message: `OTP sent to ${payload.phone}` };
    }
    return apiClient.post<LoginResponse>("/auth/login", payload);
  },

  async signUp(payload: SignUpPayload): Promise<SignUpResponse> {
    if (MOCK_AUTH) {
      await wait();
      return { message: `Account created for ${payload.name}` };
    }
    return apiClient.post<SignUpResponse>("/auth/register", payload);
  },

  async verifyOtp(payload: VerifyOtpPayload): Promise<VerifyOtpResponse> {
    if (MOCK_AUTH) {
      await wait();
      if (payload.code !== MOCK_OTP_CODE)
        throw new Error("Invalid verification code");
      return {
        token: "mock-jwt-token",
        user: {
          id: "1",
          name: "Test User",
          email: "test@example.com",
          phone: payload.phone,
        },
      };
    }
    return apiClient.post<VerifyOtpResponse>("/auth/verify-otp", payload);
  },

  async resendOtp(payload: ResendOtpPayload): Promise<ResendOtpResponse> {
    if (MOCK_AUTH) {
      await wait();
      return { message: "A new code is on its way" };
    }
    return apiClient.post<ResendOtpResponse>("/auth/resend-otp", payload);
  },
  //persistant login

  async getMe(): Promise<User> {
    return apiClient.get<User>("/auth/me");
  },
};
