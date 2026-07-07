import { z } from "zod";

/** Number of digits in the OTP code. */
export const CODE_LENGTH = 4;

/** Shared phone-number rule: required, then 8–15 digits once non-numeric chars are stripped. */
const phone = z
  .string()
  .min(1, "Please enter your phone number")
  .refine((v) => {
    const digits = v.replace(/\D/g, "");
    return digits.length >= 8 && digits.length <= 15;
  }, "Please enter a valid phone number");

export const signUpSchema = z.object({
  name: z.string().min(1, "Please enter your full name"),
  email: z
    .string()
    .min(1, "Please enter your email")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"),
  phone,
});

export const signInSchema = z.object({
  phone,
});

export const otpSchema = z.object({
  code: z
    .string()
    .min(1, "Please enter the code")
    .length(CODE_LENGTH, `Enter all ${CODE_LENGTH} digits`),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;
export type SignInFormValues = z.infer<typeof signInSchema>;
export type OtpFormValues = z.infer<typeof otpSchema>;
