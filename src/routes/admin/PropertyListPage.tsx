import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Property } from "@/types/property";
import AdminLayout from "./AdminLayout";
import Modal from "@/components/ui/modal";
import PropertyDetails from "@/components/PropertyDetails";
import WeatherBadge from "@/components/WeatherBadge";
import { useState } from "react";

type Props = {
  properties?: Property[];
};

const PropertyListPage = ({ properties = [] }: Props) => {
  const [selected, setSelected] = useState<Property | null>(null);

  return (
    <AdminLayout>
      <div className="min-h-screen">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-bold text-2xl">Properties</h1>
        </div>

        {properties.length === 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>No properties yet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                There are no properties to show. You can add a new property
                using the button above.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, idx) => {
              const p = property.props;
              return (
                <Card
                  key={idx}
                  className="overflow-hidden hover:scale-105 ease-in duration-200"
                >
                  <div
                    className="cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelected(property)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setSelected(property);
                    }}
                  >
                    <div className="mb-2">
                      {p.lat != null && p.lon != null ? (
                        <WeatherBadge lat={p.lat} lon={p.lon} />
                      ) : null}
                    </div>

                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-44 w-full object-cover my-4"
                      />
                    ) : (
                      <div className="h-44 w-full bg-gray-100 flex items-center justify-center text-gray-400">
                        No image
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="text-lg font-medium">{p.name}</span>
                        <span className="text-sm font-semibold text-sky-600">
                          ${p.price}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        {p.address}
                      </p>
                      {p.description ? (
                        <p className="text-sm text-gray-700">{p.description}</p>
                      ) : null}
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
        <Modal
          open={!!selected}
          title={selected?.props.name}
          onClose={() => setSelected(null)}
        >
          {selected && <PropertyDetails property={selected} />}
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setSelected(null)}
              className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm"
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default PropertyListPage;
