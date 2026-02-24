import { useState } from "react";

const tiers = [
  {
    name: "Bean Sprout",
    range: "0 – 149 pts",
    min: 0,
    max: 149,
    emoji: "🌱",
    perks: ["Free birthday drink", "Early access to seasonal specials", "Digital stamp card"],
    color: "bg-green-50 border-green-200",
    activeColor: "ring-4 ring-green-400 scale-105",
    barColor: "bg-green-400",
  },
  {
    name: "Coffee Lover",
    range: "150 – 499 pts",
    min: 150,
    max: 499,
    emoji: "☕",
    perks: ["Everything in Bean Sprout", "10% off merchandise", "Free size upgrade once/week", "Members-only events"],
    color: "bg-amber-50 border-amber-200",
    activeColor: "ring-4 ring-amber-400 scale-105",
    barColor: "bg-amber-400",
  },
  {
    name: "Roast Master",
    range: "500+ pts",
    min: 500,
    max: 600,
    emoji: "🔥",
    perks: ["Everything in Coffee Lover", "Free drink every 5th visit", "Exclusive roast tastings", "Priority event registration", "Annual gift bag"],
    color: "bg-choco-100 border-choco-300",
    activeColor: "ring-4 ring-choco-500 scale-105",
    barColor: "bg-choco-500",
  },
];

const howItWorks = [
  { step: "1", title: "Sign Up", desc: "Create your free account in-store or online. Takes 30 seconds." },
  { step: "2", title: "Earn Points", desc: "Get 1 point per $1 spent. Bonus points on featured drinks and events." },
  { step: "3", title: "Unlock Rewards", desc: "Redeem points for free drinks, merch, and exclusive experiences." },
];

const faq = [
  { q: "Do my points expire?", a: "Points are valid for 12 months from the date they were earned. As long as you visit once a year, they'll stay active!" },
  { q: "Can I earn points on online orders?", a: "Yes! Just make sure you're logged in to your rewards account when placing your order." },
  { q: "How do I check my balance?", a: "Ask any barista, check the app, or log in to your account on our website." },
  { q: "Can I share my rewards with someone?", a: "Not yet — but we're working on a gifting feature. Stay tuned!" },
];

function getCurrentTier(pts) {
  return tiers.findLast((t) => pts >= t.min) ?? tiers[0];
}

function getNextTier(pts) {
  return tiers.find((t) => pts < t.min) ?? null;
}

export default function RewardsPage() {
  const [points, setPoints] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [signedUp, setSignedUp] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const currentTier = getCurrentTier(points);
  const nextTier = getNextTier(points);

  const progressPct = nextTier
    ? Math.round(((points - currentTier.min) / (nextTier.min - currentTier.min)) * 100)
    : 100;

  function handleSignUp() {
    if (signedUp) return;
    setSignedUp(true);
    setPoints((p) => Math.min(p + 50, 600));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  }

  return (
    <div className="min-h-screen bg-choco-50">
      {/* Toast */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          showToast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-choco-800 text-choco-50 px-6 py-3 rounded-2xl shadow-xl font-semibold flex items-center gap-2 whitespace-nowrap">
          <span>🎉</span> +50 bonus points added! Welcome aboard.
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center mb-2">Rewards</h1>
        <p className="text-center text-choco-500 mb-16">The more you sip, the more you earn</p>

        {/* How it works */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {howItWorks.map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-choco-500 text-choco-50 text-lg font-bold flex items-center justify-center mx-auto mb-3">
                {s.step}
              </div>
              <h3 className="font-bold text-choco-900 mb-1">{s.title}</h3>
              <p className="text-choco-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Points Simulator ── */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-16">
          <h2 className="text-xl font-bold text-choco-900 mb-1 text-center">Points Simulator</h2>
          <p className="text-choco-500 text-sm text-center mb-6">Drag the slider to see your tier</p>

          <div className="flex items-center gap-4 mb-3">
            <span className="text-4xl font-extrabold text-choco-900 tabular-nums w-20 text-right">{points}</span>
            <input
              type="range"
              min={0}
              max={600}
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
              className="flex-1 accent-choco-500 cursor-pointer"
            />
            <span className="text-choco-400 text-sm w-16">600 pts</span>
          </div>

          {/* Progress bar to next tier */}
          <div className="mb-2">
            <div className="h-3 bg-choco-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${currentTier.barColor}`}
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
          <p className="text-xs text-choco-500 text-right mb-1">
            {nextTier ? `${nextTier.min - points} pts to ${nextTier.name}` : "Max tier reached 🔥"}
          </p>

          <p className="text-center text-sm font-semibold text-choco-700">
            Current tier: <span className="text-choco-900">{currentTier.emoji} {currentTier.name}</span>
          </p>
        </div>

        {/* Tiers */}
        <h2 className="text-2xl font-bold text-center mb-8 text-choco-900">Membership Tiers</h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier) => {
            const isActive = tier.name === currentTier.name;
            return (
              <div
                key={tier.name}
                className={`rounded-2xl border-2 p-6 transition-all duration-300 ${tier.color} ${isActive ? tier.activeColor : "opacity-60"}`}
              >
                <p className="text-4xl mb-3 text-center">{tier.emoji}</p>
                <h3 className="text-lg font-bold text-choco-900 text-center mb-1">{tier.name}</h3>
                <p className="text-choco-500 text-xs font-medium text-center mb-4">{tier.range}</p>
                <ul className="space-y-2">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-choco-700">
                      <span className="text-choco-500 mt-0.5">✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                {isActive && (
                  <p className="text-center text-xs font-bold mt-4 text-choco-600 uppercase tracking-wide">← Your Tier</p>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="bg-choco-800 text-choco-50 rounded-2xl p-10 text-center mb-16">
          <p className="text-3xl mb-3">{signedUp ? "✅" : "🎁"}</p>
          <h2 className="text-xl font-bold mb-2">
            {signedUp ? "You're in! 50 bonus points added." : "Join today and get 50 bonus points"}
          </h2>
          <p className="text-choco-300 text-sm max-w-md mx-auto mb-5">
            {signedUp
              ? "Check the simulator above — your points are already updated!"
              : "That's halfway to your first free pastry. Sign up takes less than a minute."}
          </p>
          <button
            onClick={handleSignUp}
            disabled={signedUp}
            className={`font-bold px-8 py-3 rounded-full transition-colors ${
              signedUp
                ? "bg-choco-600 text-choco-300 cursor-default"
                : "bg-choco-500 hover:bg-choco-400 text-choco-50"
            }`}
          >
            {signedUp ? "Signed Up!" : "Sign Up Free"}
          </button>
        </div>

        {/* FAQ accordion */}
        <h2 className="text-2xl font-bold text-center mb-8 text-choco-900">FAQ</h2>
        <div className="space-y-3">
          {faq.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={item.q} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-choco-50 transition-colors"
                >
                  <span className="font-semibold text-choco-900">{item.q}</span>
                  <span
                    className={`text-choco-400 text-lg transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    ▾
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-choco-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
