import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ProtectedPage() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      const e = data.user?.email ?? null;
      setEmail(e);
      setLoading(false);
      if (!e) location.href = "/login";
    });
  }, []);

  if (loading) return <div className="p-4">Cargando…</div>;
  if (!email) return null;

  return (
    <div className="min-h-screen from-white via-blue-50 to-orange-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border-4 border-unaBlue p-8">
        <h1 className="text-3xl font-bold mb-4 text-unaBlue">Zona protegida</h1>
        <p className="text-lg text-gray-700">
          Sesión activa:{" "}
          <span className="font-semibold text-unaOrange">{email}</span>
        </p>
      </div>
    </div>
  );
}
