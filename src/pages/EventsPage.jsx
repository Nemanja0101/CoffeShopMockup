import { useState } from "react";

const initialEvents = [
  {
    id: 1,
    title: "Latte Art Throwdown",
    date: "Sat, Mar 8",
    time: "2:00 pm – 4:00 pm",
    emoji: "🎨",
    description: "Watch our baristas compete head-to-head in a latte art battle. Audience votes decide the winner! Free tastings for all attendees.",
    tag: "Competition",
    spots: 12,
  },
  {
    id: 2,
    title: "Coffee Cupping 101",
    date: "Wed, Mar 12",
    time: "6:30 pm – 8:00 pm",
    emoji: "🔬",
    description: "Learn how to taste coffee like a pro. We'll cup four single-origin beans and walk you through aroma, flavor, and body evaluation.",
    tag: "Workshop",
    spots: 8,
  },
  {
    id: 3,
    title: "Open Mic Night",
    date: "Fri, Mar 14",
    time: "7:00 pm – 9:30 pm",
    emoji: "🎤",
    description: "Poetry, acoustic sets, comedy — the stage is yours. Sign up at the counter or just come to enjoy the show. Coffee + pastries included.",
    tag: "Community",
    spots: null,
  },
  {
    id: 4,
    title: "Pour-Over Masterclass",
    date: "Sat, Mar 22",
    time: "10:00 am – 12:00 pm",
    emoji: "☕",
    description: "Hands-on workshop covering V60, Chemex, and Kalita Wave. Bring your own gear or use ours. Take home a 250g bag of our house blend.",
    tag: "Workshop",
    spots: 6,
  },
  {
    id: 5,
    title: "Local Art Exhibition Opening",
    date: "Thu, Mar 27",
    time: "5:00 pm – 8:00 pm",
    emoji: "🖼️",
    description: "Featuring works by Portland artist Rina Sato. Wine, cheese, and espresso served. Pieces available for purchase throughout April.",
    tag: "Art",
    spots: null,
  },
];

const ALL_TAGS = ["All", "Competition", "Workshop", "Community", "Art"];

const tagColors = {
  Competition: "bg-amber-100 text-amber-800",
  Workshop: "bg-blue-100 text-blue-800",
  Community: "bg-green-100 text-green-800",
  Art: "bg-purple-100 text-purple-800",
};

export default function EventsPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [reserved, setReserved] = useState(new Set());
  const [spots, setSpots] = useState(
    Object.fromEntries(initialEvents.filter((e) => e.spots !== null).map((e) => [e.id, e.spots]))
  );
  const [expanded, setExpanded] = useState(new Set());
  const [contactOpen, setContactOpen] = useState(false);
  const [contactMsg, setContactMsg] = useState("");
  const [contactSent, setContactSent] = useState(false);

  const visible = activeTag === "All"
    ? initialEvents
    : initialEvents.filter((e) => e.tag === activeTag);

  function toggleReserve(id) {
    const alreadyReserved = reserved.has(id);
    setReserved((prev) => {
      const next = new Set(prev);
      alreadyReserved ? next.delete(id) : next.add(id);
      return next;
    });
    if (spots[id] !== undefined) {
      setSpots((prev) => ({
        ...prev,
        [id]: alreadyReserved ? prev[id] + 1 : Math.max(0, prev[id] - 1),
      }));
    }
  }

  function toggleExpand(id) {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleContactSend() {
    if (!contactMsg.trim()) return;
    setContactSent(true);
    setTimeout(() => {
      setContactOpen(false);
      setContactSent(false);
      setContactMsg("");
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-choco-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center mb-2">Events</h1>
        <p className="text-center text-choco-500 mb-10">
          More than just coffee — join our community
        </p>

        {/* Tag filter tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                activeTag === tag
                  ? "bg-choco-500 text-choco-50"
                  : "bg-white text-choco-700 hover:bg-choco-100 shadow-sm"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Reservation count badge */}
        {reserved.size > 0 && (
          <p className="text-center text-sm text-choco-600 mb-6">
            🎟️ You have <span className="font-bold text-choco-900">{reserved.size}</span> reservation{reserved.size > 1 ? "s" : ""}
          </p>
        )}

        {/* Events list */}
        <div className="space-y-4 mb-16">
          {visible.length === 0 && (
            <p className="text-center text-choco-400 py-12">No events in this category right now.</p>
          )}
          {visible.map((evt) => {
            const isReserved = reserved.has(evt.id);
            const isExpanded = expanded.has(evt.id);
            const remainingSpots = spots[evt.id];
            const isSoldOut = remainingSpots === 0;

            return (
              <div
                key={evt.id}
                className={`bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-200 ${
                  isReserved ? "ring-2 ring-choco-400" : ""
                }`}
              >
                {/* Main row */}
                <div className="p-6 flex gap-5">
                  <div className="w-14 h-14 rounded-xl bg-choco-100 flex items-center justify-center text-3xl shrink-0">
                    {evt.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-semibold text-lg text-choco-900">{evt.title}</h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColors[evt.tag] ?? "bg-choco-100 text-choco-700"}`}>
                        {evt.tag}
                      </span>
                      {isReserved && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-choco-500 text-choco-50">
                          ✓ Reserved
                        </span>
                      )}
                    </div>
                    <p className="text-choco-500 text-sm font-medium mb-2">
                      {evt.date} &middot; {evt.time}
                    </p>

                    {/* Expandable description */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out text-choco-600 text-sm leading-relaxed ${
                        isExpanded ? "max-h-40 mb-3" : "max-h-0"
                      }`}
                    >
                      {evt.description}
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleExpand(evt.id)}
                          className="text-choco-500 hover:text-choco-700 font-semibold text-sm transition-colors"
                        >
                          {isExpanded ? "Hide details ▲" : "Show details ▼"}
                        </button>
                        {evt.spots !== null && (
                          <button
                            onClick={() => !isSoldOut || isReserved ? toggleReserve(evt.id) : null}
                            disabled={isSoldOut && !isReserved}
                            className={`font-semibold text-sm px-5 py-2 rounded-xl transition-all duration-200 ${
                              isReserved
                                ? "bg-choco-100 text-choco-700 hover:bg-red-50 hover:text-red-600"
                                : isSoldOut
                                ? "bg-choco-100 text-choco-400 cursor-not-allowed"
                                : "bg-choco-500 hover:bg-choco-400 text-choco-50"
                            }`}
                          >
                            {isReserved ? "Cancel Reservation" : isSoldOut ? "Sold Out" : "Reserve a Spot"}
                          </button>
                        )}
                        {evt.spots === null && (
                          <button className="bg-choco-500 hover:bg-choco-400 text-choco-50 font-semibold text-sm px-5 py-2 rounded-xl transition-colors">
                            Learn More
                          </button>
                        )}
                      </div>
                      {evt.spots !== null && (
                        <span className={`text-xs font-medium ${isSoldOut ? "text-red-500" : "text-choco-500"}`}>
                          {isSoldOut ? "No spots left" : `${remainingSpots} spot${remainingSpots !== 1 ? "s" : ""} left`}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Host your own */}
        <div className="bg-choco-100 rounded-2xl p-8 text-center">
          <p className="text-3xl mb-3">🎉</p>
          <h2 className="text-xl font-bold text-choco-900 mb-2">Want to host an event?</h2>
          <p className="text-choco-600 text-sm max-w-md mx-auto mb-5">
            We love partnering with the community. If you have an idea for a workshop, meetup, or
            creative gathering, let's talk!
          </p>
          <button
            onClick={() => setContactOpen(true)}
            className="bg-choco-500 hover:bg-choco-400 text-choco-50 font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Contact modal */}
      {contactOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setContactOpen(false)}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
            {contactSent ? (
              <div className="text-center py-4">
                <p className="text-4xl mb-3">✅</p>
                <h3 className="text-xl font-bold text-choco-900">Message sent!</h3>
                <p className="text-choco-500 text-sm mt-1">We'll be in touch soon.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-choco-900 mb-1">Host an Event</h3>
                <p className="text-choco-500 text-sm mb-5">Tell us about your idea and we'll get back to you within 48 hours.</p>
                <textarea
                  value={contactMsg}
                  onChange={(e) => setContactMsg(e.target.value)}
                  placeholder="Describe your event idea..."
                  rows={4}
                  className="w-full border border-choco-200 rounded-xl px-4 py-3 text-sm text-choco-800 placeholder:text-choco-300 focus:outline-none focus:ring-2 focus:ring-choco-400 resize-none mb-4"
                />
                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => setContactOpen(false)}
                    className="px-5 py-2 rounded-xl text-sm text-choco-600 hover:bg-choco-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleContactSend}
                    disabled={!contactMsg.trim()}
                    className="px-5 py-2 rounded-xl text-sm font-semibold bg-choco-500 hover:bg-choco-400 text-choco-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Send
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
