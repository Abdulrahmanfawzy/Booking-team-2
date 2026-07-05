import React from "react";
import AuthLayout from "@/components/layout/AuthLayout";
import OTPVerifyForm from "@/features/auth/components/OTPForm";
const OTPVerifyPage = () => {
  return (
    <AuthLayout>
      <OTPVerifyForm />
    </AuthLayout>
  );
};

export default OTPVerifyPage;
