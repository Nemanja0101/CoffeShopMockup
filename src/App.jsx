const featured = [
  {
    id: 1,
    name: "Signature Espresso",
    description: "Rich, velvety double shot with notes of dark chocolate and hazelnut.",
    price: "$4.50",
    emoji: "☕",
  },
  {
    id: 2,
    name: "Caramel Cloud Latte",
    description: "Creamy oat milk latte topped with housemade salted caramel foam.",
    price: "$6.25",
    emoji: "🥛",
  },
  {
    id: 3,
    name: "Sunrise Cold Brew",
    description: "18-hour slow-steeped cold brew with a hint of vanilla and citrus zest.",
    price: "$5.75",
    emoji: "🧊",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-choco-50 text-choco-900 font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 bg-choco-900 text-choco-100">
        <span className="text-2xl font-bold tracking-tight">☕ Brewed Awakening</span>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-choco-300 transition-colors">Menu</a>
          <a href="#" className="hover:text-choco-300 transition-colors">About</a>
          <a href="#" className="hover:text-choco-300 transition-colors">Find Us</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 bg-choco-800 text-choco-50">
        <p className="text-choco-300 uppercase tracking-widest text-sm font-semibold mb-4">
          Est. 2018 · Downtown Portland
        </p>
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight max-w-2xl mb-6">
          Where Every Cup<br />Tells a Story
        </h1>
        <p className="text-choco-200 text-lg max-w-xl mb-10">
          Sourced from small farms. Roasted in-house. Served with care. Come find your
          perfect cup at Brewed Awakening.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-choco-500 hover:bg-choco-400 text-choco-50 font-bold px-8 py-3 rounded-full transition-colors">
            View Full Menu
          </button>
          <button className="border border-choco-300 text-choco-300 hover:bg-choco-300 hover:text-choco-900 font-bold px-8 py-3 rounded-full transition-colors">
            Order Online
          </button>
        </div>
      </section>

      {/* Hours Banner */}
      <div className="bg-choco-500 text-choco-50 text-center py-3 text-sm font-medium tracking-wide">
        Mon–Fri 6:30 am – 8 pm &nbsp;·&nbsp; Sat–Sun 7 am – 9 pm &nbsp;·&nbsp; 142 Oak Street, Portland OR
      </div>

      {/* Featured Drinks */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-2">Featured Drinks</h2>
        <p className="text-center text-choco-500 mb-12">A few of our most-loved creations</p>
        <div className="grid gap-6 sm:grid-cols-3">
          {featured.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <span className="text-4xl">{item.emoji}</span>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <span className="text-choco-500 font-bold">{item.price}</span>
              </div>
              <p className="text-choco-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-choco-900 text-choco-400 text-center py-8 text-sm">
        © 2025 Brewed Awakening. All rights reserved. &nbsp;·&nbsp;
        <a href="#" className="hover:text-choco-300 transition-colors">Instagram</a> &nbsp;·&nbsp;
        <a href="#" className="hover:text-choco-300 transition-colors">Contact</a>
      </footer>
    </div>
  );
}
