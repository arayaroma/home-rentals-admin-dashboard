import { SignUpForm } from "@/components/auth/sign-up-form";
import AuthLayout from "./AuthLayout";

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
}
