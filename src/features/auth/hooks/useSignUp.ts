import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { authApi } from "@/features/auth/api/auth.api";
import type { SignUpPayload } from "@/features/auth/types/auth";

export const useSignUp = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (payload: SignUpPayload) => authApi.signUp(payload),
    onSuccess: (data, variables) => {
      toast.success(data.message);
      navigate("/otp-verify", { state: { phone: variables.phone } });
    },
    onError: () =>
      toast.error("Could not create your account. Please try again."),
  });
};
