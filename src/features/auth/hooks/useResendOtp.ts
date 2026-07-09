import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { authApi } from "@/features/auth/api/auth.api";
import type { ResendOtpPayload } from "@/features/auth/types/auth";

export const useResendOtp = () =>
  useMutation({
    mutationFn: (payload: ResendOtpPayload) => authApi.resendOtp(payload),
    onSuccess: (data) => toast.success(data.message),
    onError: () => toast.error("Could not resend the code. Please try again."),
  });
