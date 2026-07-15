import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { authApi } from "@/features/auth/api/auth.api";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { getApiErrorMessage } from "@/features/auth/utils/apiError";
import type { GoogleLoginPayload } from "@/features/auth/types/auth";

export const useGoogleLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return useMutation({
    mutationFn: (payload: GoogleLoginPayload) => authApi.googleLogin(payload),
    onSuccess: (res) => {
      login(res.data.token, res.data.user, true);
      toast.success(res.message);
      navigate("/", { replace: true });
    },
    onError: (error) =>
      toast.error(
        getApiErrorMessage(error, "Could not sign you in with Google."),
      ),
  });
};
