export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

//login
export interface LoginPayload {
  phone: string;
}
export interface LoginResponse {
  message: string;
}
//sign up
export interface SignUpPayload {
  name: string;
  email: string;
  phone: string;
}
export interface SignUpResponse {
  message: string;
}

// OTP verify
export interface VerifyOtpPayload {
  phone: string;
  code: string;
}
export interface VerifyOtpResponse {
  token: string;
  user: User;
}

// Resend OTP
export interface ResendOtpPayload {
  phone: string;
}
export interface ResendOtpResponse {
  message: string;
}
