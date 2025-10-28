import HeaderUserMenu from "@/components/HeaderUserMenu";
import type { PropsWithChildren } from "react";

export default function AdminLayout({
  children,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <div className="min-h-screen flex flex-col mx-auto">
      <header className="flex items-center justify-between gap-4 px-4 py-3 bg-white border-b">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-sm">
            HR
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Home Rentals</span>
            <span className="text-xs text-gray-500 hidden sm:inline">
              Admin Panel
            </span>
          </div>
        </div>
        <HeaderUserMenu />
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
