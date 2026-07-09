import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { authApi } from "@/features/auth/api/auth.api";
import type { LoginPayload } from "@/features/auth/types/auth";

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (payload: LoginPayload) => authApi.login(payload),
    onSuccess: (data, variables) => {
      toast.success(data.message);
      // carry the phone to the OTP page via router state
      navigate("/otp-verify", { state: { phone: variables.phone } });
    },
    onError: () => toast.error("Could not send the code. Please try again."),
  });
};
