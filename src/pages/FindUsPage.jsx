export default function FindUsPage() {
  return (
    <div className="min-h-screen bg-choco-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center mb-2">Find Us</h1>
        <p className="text-center text-choco-500 mb-16">
          Visit us at our downtown Portland location
        </p>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Location Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-choco-900">Our Location</h2>

            <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
              <div>
                <h3 className="font-semibold text-choco-900 mb-2">Address</h3>
                <p className="text-choco-700">
                  142 Oak Street<br />
                  Portland, OR 97214<br />
                  United States
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-choco-900 mb-2">Hours</h3>
                <div className="space-y-1 text-choco-700">
                  <p><span className="font-medium">Monday – Friday:</span> 6:30 am – 8 pm</p>
                  <p><span className="font-medium">Saturday – Sunday:</span> 7 am – 9 pm</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-choco-900 mb-2">Contact</h3>
                <p className="text-choco-700">
                  <a href="tel:+15035551234" className="hover:text-choco-500 transition-colors">
                    (503) 555-1234
                  </a><br />
                  <a href="mailto:hello@brewedawakening.com" className="hover:text-choco-500 transition-colors">
                    hello@brewedawakening.com
                  </a>
                </p>
              </div>

              <button className="w-full bg-choco-500 hover:bg-choco-400 text-choco-50 font-semibold py-3 rounded-xl transition-colors mt-6">
                Get Directions
              </button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-choco-900">Map</h2>
            <div className="bg-choco-200 rounded-2xl shadow-sm h-96 flex items-center justify-center">
              <div className="text-center">
                <p className="text-4xl mb-3">📍</p>
                <p className="text-choco-700 font-semibold">142 Oak Street, Portland OR</p>
                <p className="text-choco-600 text-sm mt-2">Map integration coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Visit Section */}
        <div className="bg-choco-100 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-choco-900">Why Visit Brewed Awakening?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex gap-3">
              <span className="text-3xl">🌱</span>
              <div>
                <h3 className="font-semibold text-choco-900">Ethically Sourced</h3>
                <p className="text-choco-700 text-sm">Coffee from small farms with fair trade practices</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-3xl">🔥</span>
              <div>
                <h3 className="font-semibold text-choco-900">In-House Roasted</h3>
                <p className="text-choco-700 text-sm">Fresh roasted daily in our roastery</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-3xl">☕</span>
              <div>
                <h3 className="font-semibold text-choco-900">Expert Baristas</h3>
                <p className="text-choco-700 text-sm">Passionate about craft and customer experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Parking & Accessibility */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-choco-900 mb-3">♿ Accessibility</h3>
            <p className="text-choco-700 text-sm">
              Our café is wheelchair accessible with accessible restrooms and ample seating space.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-choco-900 mb-3">🅿️ Parking</h3>
            <p className="text-choco-700 text-sm">
              Street parking available on Oak Street. Paid parking lot just two blocks away.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
