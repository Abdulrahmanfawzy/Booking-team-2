import AuthLayout from "@/components/layout/AuthLayout";
import SignUpForm from "@/features/auth/components/SignUpForm";
import GoogleBtn from "@/features/auth/components/GoogleBtn";
import OrLine from "@/features/auth/components/OrLine";

export default function SignUpPage() {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center text-center">
        <h1 className="font-heading text-3xl font-semibold text-(--Auth-head-font-color)">
          Sign up
        </h1>
        <p className="mt-2 text-sm text-text">
          Please provide all information required to create your account
        </p>
      </div>

      <SignUpForm />
      <OrLine />
      <GoogleBtn text="Sign up with Google" />

      <p className="mt-6 text-center text-sm text-text">
        Already have an account!{" "}
        <a href="/sign-in" className="font-semibold text-brand hover:underline">
          Sign in
        </a>
      </p>
    </AuthLayout>
  );
}
