import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Props = {
  onSignOut?: () => void;
};

export default function HeaderUserMenu({ onSignOut }: Props) {
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    // fetch current user from Supabase
    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? null);
      setLoading(false);
    });

    // simple click-outside listener to close the dropdown
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement)?.closest(".user-dropdown")) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSignOut = async () => {
    if (onSignOut) return onSignOut();
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  if (loading) return null;

  const initials = email ? email.charAt(0).toUpperCase() : "U";

  return (
    <div className="relative user-dropdown">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-3 px-2 py-1 rounded-md hover:bg-slate-50"
        aria-haspopup="true"
        aria-expanded={open}
        title={email ?? "Usuario"}
      >
        <div className="h-8 w-8 rounded-full bg-sky-500 text-white flex items-center justify-center text-sm font-semibold">
          {initials}
        </div>
        <span className="hidden sm:inline truncate max-w-[120px] text-sm">
          {email}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow z-50">
          <button
            className="w-full text-left px-3 py-2 text-sm flex items-center gap-2 hover:bg-slate-100"
            onClick={handleSignOut}
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
