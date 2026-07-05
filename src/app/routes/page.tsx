import { createBrowserRouter } from "react-router-dom";
import SignInPage from "@/app/routes/SignInPage";
import SignUpPage from "@/app/routes/SignUpPage";
import OTPVerifyPage from "@/app/routes/OTPVerifyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/otp-verify",
    element: <OTPVerifyPage />,
  },
]);
