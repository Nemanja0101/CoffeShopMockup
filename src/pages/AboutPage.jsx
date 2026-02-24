export default function AboutPage() {
  const team = [
    { name: "Maya Chen", role: "Founder & Head Roaster", emoji: "👩‍🍳", bio: "Former chemist turned coffee obsessive. Maya founded Brewed Awakening after a life-changing trip to Ethiopian coffee farms." },
    { name: "Liam Torres", role: "Lead Barista", emoji: "🧑‍🎨", bio: "3-time regional latte art champion. Liam brings creativity and precision to every cup he crafts." },
    { name: "Priya Kapoor", role: "Pastry Chef", emoji: "👩‍🍳", bio: "Classically trained in Paris, Priya bakes all our pastries fresh every morning using local, organic ingredients." },
    { name: "Jordan West", role: "Operations Manager", emoji: "🧑‍💼", bio: "Jordan keeps everything running smoothly — from supply chain logistics to the perfect playlist." },
  ];

  const milestones = [
    { year: "2018", event: "Opened our first location on Oak Street, Portland" },
    { year: "2019", event: "Started roasting in-house with our first 15kg drum roaster" },
    { year: "2020", event: "Launched online ordering and home delivery" },
    { year: "2021", event: "Won 'Best Independent Coffee Shop' — Portland Monthly" },
    { year: "2023", event: "Partnered with 12 small farms across 4 countries" },
    { year: "2025", event: "Expanded to our second location in the Pearl District" },
  ];

  return (
    <div className="min-h-screen bg-choco-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center mb-2">Our Story</h1>
        <p className="text-center text-choco-500 mb-16">
          From bean to cup, with heart
        </p>

        {/* Mission */}
        <div className="bg-choco-800 text-choco-50 rounded-2xl p-10 mb-16 text-center">
          <p className="text-choco-300 uppercase tracking-widest text-xs font-semibold mb-4">Our Mission</p>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto">
            To serve exceptional, ethically sourced coffee while building a warm community space
            where everyone feels at home. Every bean tells a story — and we want you to be part of it.
          </p>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🌍", title: "Sustainability", desc: "Carbon-neutral shipping, compostable packaging, and zero-waste goals by 2026." },
            { icon: "🤝", title: "Community", desc: "We host open mic nights, art shows, and donate 2% of profits to local shelters." },
            { icon: "🔬", title: "Quality", desc: "Every batch is cupped and scored. If it doesn't hit 85+, it doesn't make the menu." },
          ].map((v) => (
            <div key={v.title} className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <p className="text-4xl mb-3">{v.icon}</p>
              <h3 className="font-bold text-choco-900 mb-2">{v.title}</h3>
              <p className="text-choco-600 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <h2 className="text-2xl font-bold text-center mb-8 text-choco-900">Our Journey</h2>
        <div className="space-y-4 mb-16 max-w-xl mx-auto">
          {milestones.map((m) => (
            <div key={m.year} className="flex gap-4 items-start">
              <span className="bg-choco-500 text-choco-50 text-xs font-bold px-3 py-1 rounded-full mt-0.5 shrink-0">
                {m.year}
              </span>
              <p className="text-choco-700 text-sm">{m.event}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <h2 className="text-2xl font-bold text-center mb-8 text-choco-900">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl shadow-sm p-6 flex gap-4">
              <div className="w-14 h-14 rounded-full bg-choco-100 flex items-center justify-center text-3xl shrink-0">
                {member.emoji}
              </div>
              <div>
                <h3 className="font-semibold text-choco-900">{member.name}</h3>
                <p className="text-choco-500 text-xs font-medium mb-2">{member.role}</p>
                <p className="text-choco-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
