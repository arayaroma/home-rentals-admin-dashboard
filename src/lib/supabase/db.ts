import { createClient as createSupabaseClient } from "@/lib/supabase/client";

const DB_SCHEMA = "dev";

export function createClient() {
  const client = createSupabaseClient();

  return {
    ...client,
    table: (tableName: string) => {
      return client.schema(DB_SCHEMA).from(tableName);
    },
    raw: client,
    auth: client.auth,
    storage: client.storage,
  };
}

export function useSupabase() {
  return createClient();
}
