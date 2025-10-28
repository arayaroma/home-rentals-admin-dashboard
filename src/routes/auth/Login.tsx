import { LoginForm } from "@/components/auth/login-form";
import AuthLayout from "./AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
