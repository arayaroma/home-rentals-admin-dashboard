import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import AuthLayout from "./AuthLayout";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
