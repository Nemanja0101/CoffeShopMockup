export default function ContactPage() {
  return (
    <div className="min-h-screen bg-choco-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center mb-2">Get In Touch</h1>
        <p className="text-center text-choco-500 mb-12">
          Have questions? We'd love to hear from you.
        </p>

        {/* Contact Info Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "📍", title: "Location", content: "142 Oak Street, Portland, OR 97214" },
            { icon: "📞", title: "Phone", content: "(503) 555-0123" },
            { icon: "✉️", title: "Email", content: "hello@brewedawakening.com" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <p className="text-4xl mb-3">{item.icon}</p>
              <h3 className="font-bold text-choco-900 mb-2">{item.title}</h3>
              <p className="text-choco-600 text-sm">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Hours */}
        <div className="bg-choco-100 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-choco-900 mb-4">Hours</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-choco-700">
            <div>
              <p className="font-semibold">Monday – Friday</p>
              <p>6:30 am – 8:00 pm</p>
            </div>
            <div>
              <p className="font-semibold">Saturday – Sunday</p>
              <p>7:00 am – 9:00 pm</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-choco-900 mb-6">Send us a Message</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-choco-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-choco-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-choco-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-choco-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 border border-choco-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-choco-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-choco-500 hover:bg-choco-400 text-choco-50 font-bold py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
