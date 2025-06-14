import { useState } from "react";
import { Input } from "./components/ui/input";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { ShoppingCart, Search } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Пропеллер 5"",
    price: 250,
    image: "https://example.com/propeller.jpg",
  },
  {
    id: 2,
    name: "Полетный контроллер F4",
    price: 1200,
    image: "https://example.com/flight-controller.jpg",
  },
  {
    id: 3,
    name: "ESC 30A 4-in-1",
    price: 950,
    image: "https://example.com/esc.jpg",
  },
  {
    id: 4,
    name: "LiPo батарея 4S 1500mAh",
    price: 1300,
    image: "https://example.com/lipo.jpg",
  },
];

export default function DronePartsStore() {
  const [query, setQuery] = useState("");
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">DroneParts</h1>
        <ShoppingCart className="w-6 h-6" />
      </header>

      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Поиск по запчастям..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outline">
          <Search className="w-4 h-4 mr-2" /> Поиск
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow-lg">
            <CardContent className="p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-600 mb-2">₴{product.price}</p>
              <Button className="w-full">Добавить в корзину</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}