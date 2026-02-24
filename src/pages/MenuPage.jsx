import { useState } from "react";
import CoffeeCard from "../components/CoffeeCard";

const allDrinks = [
  {
    id: 1,
    name: "Signature coffee",
    description:
      "Rich, velvety double shot with notes of dark chocolate and hazelnut.",
    longDescription:
      "Our signature blend sources beans from small farms in Central America, slow-roasted to bring out their natural sweetness. A perfect shot showcases the espresso's full body with a lingering finish that coats your palate.",
    price: "$4.50",
    emoji: "☕",
    badge: "Bestseller",
    tags: ["Hot", "Vegan"],
    roast: "Dark",
    category: "Turkish coffee",
  },
  {
    id: 2,
    name: "Caramel Cloud Latte",
    description:
      "Creamy oat milk latte topped with housemade salted caramel foam.",
    longDescription:
      "Steamed to the perfect temperature, our oat milk creates a naturally sweet base that pairs beautifully with our small-batch caramel reduction. The salted foam adds a gourmet touch that balances richness with a hint of sea salt.",
    price: "$6.25",
    emoji: "🥛",
    badge: null,
    tags: ["Hot", "Dairy-free"],
    roast: "Medium",
    category: "Lattes",
  },
  {
    id: 3,
    name: "Sunrise Cold Brew",
    description:
      "18-hour slow-steeped cold brew with a hint of vanilla and citrus zest.",
    longDescription:
      "Our signature cold brew method extracts every nuance of flavor without bitterness, resulting in a silky-smooth cup. The subtle vanilla undertones and bright citrus notes make it equally refreshing on its own or with a splash of oat milk.",
    price: "$5.75",
    emoji: "🧊",
    badge: "Seasonal",
    tags: ["Cold", "Vegan"],
    roast: "Dark",
    category: "Cold Brew",
  },
  {
    id: 4,
    name: "Flat White",
    description:
      "Silky microfoam over a ristretto double shot. Simple and perfect.",
    longDescription:
      "An Australian classic that celebrates espresso excellence. Two ristretto shots provide concentrated intensity, while perfectly steamed milk creates a velvety microfoam that integrates seamlessly into every sip.",
    price: "$5.00",
    emoji: "🫗",
    badge: null,
    tags: ["Hot"],
    roast: "Dark",
    category: "Espresso",
  },
  {
    id: 5,
    name: "Honey Lavender Latte",
    description:
      "Espresso, steamed oat milk, house lavender syrup and a drizzle of wildflower honey.",
    longDescription:
      "A delicate balance of floral and sweet notes, this drink pairs our light roast espresso with aromatic lavender and wildflower honey for a sophisticated cup. Perfect for those who enjoy subtle complexity in their latte.",
    price: "$6.75",
    emoji: "💜",
    badge: "New",
    tags: ["Hot", "Dairy-free"],
    roast: "Light",
    category: "Lattes",
  },
  {
    id: 6,
    name: "Nitro Cold Brew",
    description:
      "Slow-brew concentrate infused with nitrogen for a creamy, cascading pour.",
    longDescription:
      "Watch as cascading nitrogen bubbles create a creamy head with every pour. This cold brew has incredible body and a smooth mouthfeel without any added cream, making it our smoothest iced coffee experience.",
    price: "$6.00",
    emoji: "🫧",
    badge: null,
    tags: ["Cold", "Vegan"],
    roast: "Dark",
    category: "Cold Brew",
  },
  {
    id: 7,
    name: "Cortado",
    description:
      "Equal parts espresso and warm milk, cutting the intensity just right.",
    longDescription:
      "This traditional Spanish drink is the sweet spot between an espresso and a latte. Two shots of espresso meet equal parts steamed milk to create a harmonious cup that's bold yet creamy.",
    price: "$4.75",
    emoji: "🍵",
    badge: null,
    tags: ["Hot"],
    roast: "Medium",
    category: "Espresso",
  },
  {
    id: 8,
    name: "Vanilla Sweet Cream Cold Brew",
    description:
      "Cold brew topped with a velvety vanilla sweet cream that slowly cascades through the cup.",
    longDescription:
      "Our cold brew forms the perfect base for this indulgent drink, while our housemade vanilla sweet cream gently mingles into every sip. The result is a naturally sweet cold coffee that feels like a treat without being overly sugary.",
    price: "$6.50",
    emoji: "🍦",
    badge: "Bestseller",
    tags: ["Cold"],
    roast: "Medium",
    category: "Cold Brew",
  },
];

const CATEGORIES = ["All", "Espresso", "Lattes", "Cold Brew", "Turkish coffee"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visible =
    activeCategory === "All"
      ? allDrinks
      : allDrinks.filter((d) => d.category === activeCategory);

  return (
    <div className="min-h-screen bg-choco-50">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center mb-2">Our Menu</h1>
        <p className="text-center text-choco-500 mb-10">
          Roasted in-house, crafted with care
        </p>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-choco-500 text-choco-50"
                  : "bg-white text-choco-700 hover:bg-choco-100 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((drink) => (
            <CoffeeCard key={drink.id} item={drink} />
          ))}
        </div>
      </div>
    </div>
  );
}
