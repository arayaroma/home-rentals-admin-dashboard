import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setIsAuthenticated(!!data.user);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-8 text-center">Cargando…</div>;
  if (!isAuthenticated)
    return <Navigate to="/login" state={{ from: location }} replace />;
  return <>{children}</>;
}
