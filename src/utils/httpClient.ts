import axios from "axios";
import type { AxiosResponse } from "axios";
import type {
  OpenWeatherRequest,
  OpenWeatherResponse,
} from "@/types/openWeatherAPI";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || undefined,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
  },
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Error de red";
    return Promise.reject(new Error(message));
  }
);

export const fetchWeatherData = async ({
  lat,
  lon,
  mode = null,
  units = "metric",
  lang = "en",
}: OpenWeatherRequest): Promise<OpenWeatherResponse> => {
  try {
    const response = await api.get("/", {
      params: {
        lat,
        lon,
        mode,
        units,
        lang,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};
