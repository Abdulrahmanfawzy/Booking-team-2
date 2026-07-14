export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  image: string | null;
  phone_verified_at: string | null;
  created_at: string;
}

export interface AuthData {
  user: User;
  token: string;
}

export interface LoginPayload {
  phone: string;
  password: string;
}
export type LoginResponse = ApiResponse<AuthData>;

export interface SignUpPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
}
export type SignUpResponse = ApiResponse<unknown>;

export interface VerifyOtpPayload {
  phone: string;
  otp: string;
}
export type VerifyOtpResponse = ApiResponse<unknown[]>;

export interface ResendOtpPayload {
  phone: string;
}
export type ResendOtpResponse = ApiResponse<unknown[]>;

export type ForgetPasswordPayload = { phone: string };

export type ForgetPasswordResponse = {
  success: boolean;
  message: string;
  data: [];
};

export type ResetPasswordPayload = {
  phone: string;
  reset_token: string;
  password: string;
  password_confirmation: string;
};

export type ResetPasswordResponse = {
  success: boolean;
  message: string;
  data: [];
};
