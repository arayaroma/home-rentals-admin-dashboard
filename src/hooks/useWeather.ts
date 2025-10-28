import { useEffect, useState, useCallback } from "react";
import { fetchWeatherData } from "@/utils/httpClient";
import type { OpenWeatherResponse } from "@/types/openWeatherAPI";

type Args = {
  lat?: number | null;
  lon?: number | null;
};

const cache = new Map<string, OpenWeatherResponse>();

export function useWeather({ lat, lon }: Args) {
  const [data, setData] = useState<OpenWeatherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const key = lat != null && lon != null ? `${lat},${lon}` : null;

  const fetchData = useCallback(
    async (force = false) => {
      if (!key) return;
      if (cache.has(key) && !force) {
        setData(cache.get(key)!);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const res = await fetchWeatherData({ lat: lat!, lon: lon! });
        cache.set(key, res);
        setData(res);
      } catch (err: any) {
        setError(err?.message ?? "Failed to fetch weather");
      } finally {
        setLoading(false);
      }
    },
    [key, lat, lon]
  );

  useEffect(() => {
    if (!key) return;

    fetchData();
  }, [key, fetchData]);

  return {
    data,
    loading,
    error,
    refetch: () => fetchData(true),
  } as const;
}

export default useWeather;
