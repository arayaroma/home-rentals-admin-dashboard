import type { PropsWithChildren } from "react";

export default function AuthLayout({
  children,
  title,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-4 py-8">
        {title ? (
          <h1 className="mb-6 text-center text-4xl font-extrabold">{title}</h1>
        ) : null}
        <div className="shadow-2xl rounded-3xl overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
