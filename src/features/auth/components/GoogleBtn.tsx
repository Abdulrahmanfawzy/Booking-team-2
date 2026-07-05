import { Button } from "@/components/shared/Button";
import { FcGoogle } from "react-icons/fc";

interface GoogleBtnProps {
  text?: string;
}
const GoogleBtn = ({ text = "Sign in with Google" }: GoogleBtnProps) => {
  return (
    <Button type="button" variant="outline" fullWidth>
      <FcGoogle className="size-5" />
      {text}
    </Button>
  );
};

export default GoogleBtn;
