export interface Property {
  props: {
    name: string;
    address: string;
    lat?: number;
    lon?: number;
    description?: string;
    price: number;
    image: string;
  };
}
