import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authApi } from "@/features/auth/api/auth.api";
import { useAuth } from "@/features/auth/hooks/useAuth";
import type { VerifyOtpPayload } from "@/features/auth/types/auth";

export const useVerifyOtp = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return useMutation({
    mutationFn: (payload: VerifyOtpPayload) => authApi.verifyOtp(payload),
    onSuccess: (data) => {
      login(data.token, data.user); // persist to localStorage + context
      navigate("/choose-specialist", { replace: true });
    },
  });
};
