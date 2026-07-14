import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { authApi } from "@/features/auth/api/auth.api";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { getApiErrorMessage } from "@/features/auth/utils/apiError";
import type { LoginPayload } from "@/features/auth/types/auth";

type LoginVariables = LoginPayload & { remember: boolean };

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return useMutation({
    mutationFn: ({ phone, password }: LoginVariables) =>
      authApi.login({ phone, password }),
    onSuccess: (res, variables) => {
      login(res.data.token, res.data.user, variables.remember);
      toast.success(res.message);
      navigate("/", { replace: true });
    },
    onError: (error) =>
      toast.error(getApiErrorMessage(error, "Could not sign you in.")),
  });
};
