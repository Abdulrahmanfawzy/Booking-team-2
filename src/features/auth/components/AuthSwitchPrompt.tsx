import { Link } from "react-router-dom";

interface AuthSwitchPromptProps {
  question: string;
  linkText: string;
  to: string;
}

const AuthSwitchPrompt = ({ question, linkText, to }: AuthSwitchPromptProps) => {
  return (
    <p className="mt-6 text-center text-sm text-text">
      {question}{" "}
      <Link to={to} className="font-semibold text-brand hover:underline">
        {linkText}
      </Link>
    </p>
  );
};

export default AuthSwitchPrompt;
