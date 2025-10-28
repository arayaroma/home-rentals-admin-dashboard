import useWeather from "@/hooks/useWeather";

interface Props {
  lat: number;
  lon: number;
}

const WeatherPanel = ({ lat, lon }: Props) => {
  const { data, loading, error, refetch } = useWeather({ lat, lon });

  return (
    <div>
      {lat != null && lon != null ? (
        <div className="flex items-center gap-4">
          {loading ? (
            <div className="text-sm text-gray-500">Loading weather…</div>
          ) : error || !data ? (
            <div className="text-sm text-gray-500">No weather</div>
          ) : (
            <div className="flex items-center gap-3">
              {data.weather?.[0]?.icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt={data.weather?.[0]?.description ?? "weather"}
                  className="w-12 h-12"
                />
              )}
              <div>
                <div className="text-lg font-bold">
                  {Math.round(data.main.temp)}°C
                </div>
                <div className="text-sm text-gray-600">
                  {data.weather?.[0]?.main} — {data.weather?.[0]?.description}
                </div>
              </div>
            </div>
          )}
          <button
            onClick={() => refetch()}
            className="ml-auto text-xs text-sky-600 hover:underline"
          >
            Refresh
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherPanel;
