import { useState } from "react";

const roastColors = {
  Light: "bg-amber-300",
  Medium: "bg-amber-600",
  Dark: "bg-choco-800",
};

export default function CoffeeCard({ item }) {
  const { name, price, emoji, description, longDescription, badge, tags, roast } = item;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
      {/* Badge */}
      {badge && (
        <span className="absolute top-4 right-4 bg-choco-500 text-choco-50 text-xs font-semibold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}

      {/* Emoji swatch */}
      <div className="w-14 h-14 rounded-xl bg-choco-100 flex items-center justify-center text-3xl">
        {emoji}
      </div>

      {/* Name + price */}
      <div className="flex items-center justify-between gap-2 pr-14">
        <h3 className="font-semibold text-lg leading-snug">{name}</h3>
        <span className="text-choco-500 font-bold whitespace-nowrap">{price}</span>
      </div>

      {/* Roast indicator */}
      {roast && (
        <div className="flex items-center gap-1.5 text-xs text-choco-600">
          <span className={`w-2.5 h-2.5 rounded-full ${roastColors[roast] ?? "bg-choco-400"}`} />
          {roast} Roast
        </div>
      )}

      {/* Description */}
      <p className="text-choco-600 text-sm leading-relaxed">
        {expanded ? longDescription : description}
      </p>
      {longDescription && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="text-xs text-choco-500 hover:text-choco-700 font-medium self-start -mt-1"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-choco-100 text-choco-700 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <button className="mt-auto w-full bg-choco-500 hover:bg-choco-400 text-choco-50 font-semibold py-2 rounded-xl transition-colors text-sm">
        Add to order
      </button>
    </div>
  );
}
