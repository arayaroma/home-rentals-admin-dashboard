import type { Property } from "@/types/property";
import WeatherPanel from "./WeatherPanel";

type Props = {
  property: Property;
};

export default function PropertyDetails({ property }: Props) {
  const p = property.props;
  const lat = p.lat;
  const lon = p.lon;

  return (
    <div className="space-y-4">
      {p.image ? (
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-64 object-cover rounded"
        />
      ) : (
        <div className="w-full h-64 bg-gray-100 rounded flex items-center justify-center text-gray-400">
          No image
        </div>
      )}

      {/* Weather panel */}
      <WeatherPanel lat={lat ?? 0} lon={lon ?? 0} />

      <div>
        <p className="text-sm text-muted-foreground">{p.address}</p>
        {p.description ? (
          <p className="mt-2 text-gray-700">{p.description}</p>
        ) : null}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-sky-600">${p.price}</div>
        <div />
      </div>
    </div>
  );
}
