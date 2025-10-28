import { createClient as createSupabaseClient } from "@supabase/supabase-js";

export function createClient() {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_OR_ANON_KEY;

  if (!url || !key) {
    console.error("Missing Supabase env vars:", { url: !!url, key: !!key });
    throw new Error("Supabase URL and key are required. Check your .env file.");
  }

  return createSupabaseClient(url, key, {
    auth: { persistSession: true },
    realtime: {
      params: {
        eventsPerSecond: 10,
      },
    },
  });
}
