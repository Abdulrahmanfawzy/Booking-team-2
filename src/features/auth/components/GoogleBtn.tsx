import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

interface GoogleBtnProps {
  text?: string;
}
const GoogleBtn = ({ text = "Sign in with Google" }: GoogleBtnProps) => {
  return (
    <Button type="button" variant="outline" size="xl" fullWidth>
      <FcGoogle className="size-5" />
      {text}
    </Button>
  );
};

export default GoogleBtn;
