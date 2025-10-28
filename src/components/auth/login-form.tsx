import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { loginSchema } from "@/schemas/authSchemas";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setFieldErrors({});

    try {
      const parsed = loginSchema.safeParse({ email, password });
      if (!parsed.success) {
        const fe = parsed.error.flatten().fieldErrors as Record<
          string,
          string[]
        >;
        setFieldErrors(fe);
        setError("Please, correct the marked fields.");
        return;
      }

      const { error: sbError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (sbError) throw sbError;

      location.href = "/admin";
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Ocurrió un error");
    } finally {
      setIsLoading(false);
    }
  };

  const clearFieldError = (key: string) =>
    setFieldErrors((prev) => {
      if (!prev[key]?.length) return prev;
      const { [key]: _removed, ...rest } = prev;
      return rest;
    });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">
            Home Rentals Admin Dashboard
          </CardTitle>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="darayaroma@acme.com"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    clearFieldError("email");
                  }}
                  aria-invalid={!!fieldErrors.email?.length}
                  aria-describedby={
                    fieldErrors.email?.length ? "email-error" : undefined
                  }
                />
                {fieldErrors.email?.length ? (
                  <p id="email-error" className="text-xs text-red-500">
                    {fieldErrors.email[0]}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="**********"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    clearFieldError("password");
                  }}
                  aria-invalid={!!fieldErrors.password?.length}
                  aria-describedby={
                    fieldErrors.password?.length ? "password-error" : undefined
                  }
                />
                {fieldErrors.password?.length ? (
                  <p id="password-error" className="text-xs text-red-500">
                    {fieldErrors.password[0]}
                  </p>
                ) : null}
              </div>

              {error && (
                <pre className="whitespace-pre-wrap rounded-md bg-red-50 p-3 text-sm text-red-700">
                  {error}
                </pre>
              )}

              <Button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </div>

            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/sign-up" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
