import { GoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import { useGoogleLogin } from "@/features/auth/hooks/useGoogleLogin";

interface GoogleBtnProps {
  text?: "signin_with" | "signup_with" | "continue_with";
}
const GoogleBtn = ({ text = "signin_with" }: GoogleBtnProps) => {
  const { mutate: googleLogin } = useGoogleLogin();

  return (
    <GoogleLogin
      text={text}
      width="320"
      onSuccess={(credentialResponse) => {
        // This credential string is the id_token for backend
        const id_token = credentialResponse.credential;
        if (!id_token) {
          toast.error("Google didn't return a token. Please try again.");
          return;
        }
        googleLogin({ id_token });
      }}
      onError={() => toast.error("Google sign-in failed. Please try again.")}
    />
  );
};

export default GoogleBtn;
