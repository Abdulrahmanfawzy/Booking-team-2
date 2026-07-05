import AuthLayout from "@/components/layout/AuthLayout";
import SignInForm from "@/features/auth/components/SignInForm";
import GoogleBtn from "@/features/auth/components/GoogleBtn";
import OrLine from "@/features/auth/components/OrLine";

export default function SignInPage() {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center text-center">
        <h1 className="font-heading text-3xl font-semibold text-(--Auth-head-font-color)">
          Sign in
        </h1>
        <p className="mt-2 text-sm text-text">Please Enter your phone number</p>
      </div>

      <SignInForm />
      <OrLine />
      <GoogleBtn text="Sign in with Google" />

      <p className="mt-6 text-center text-sm text-text">
        Don&rsquo;t have an account?{" "}
        <a href="/sign-up" className="font-semibold text-brand hover:underline">
          Sign up
        </a>
      </p>
    </AuthLayout>
  );
}
