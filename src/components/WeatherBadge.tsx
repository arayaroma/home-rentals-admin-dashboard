import useWeather from "@/hooks/useWeather";

type Props = {
  lat: number;
  lon: number;
};

export default function WeatherBadge({ lat, lon }: Props) {
  const { data, loading, error } = useWeather({ lat, lon });

  if (loading) {
    return <div className="text-xs text-gray-500">Loading weather…</div>;
  }

  if (error || !data) {
    return <div className="text-xs text-gray-500">No weather</div>;
  }

  const icon = data.weather?.[0]?.icon;
  const temp = Math.round(data.main.temp);

  return (
    <div className="flex items-center gap-2 text-xs text-gray-700">
      {icon && (
        // OpenWeather icons
        // https://openweathermap.org/weather-conditions
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={data.weather?.[0]?.description ?? "weather"}
          className="w-8 h-8"
        />
      )}
      <div className="flex flex-col">
        <span className="font-semibold">{temp}°C</span>
        <span className="text-[11px] text-gray-500">{data.weather?.[0]?.main}</span>
      </div>
    </div>
  );
}
