import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const navItems = ["Home", "Shop", "About", "Kontakt"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold text-green-600">Splash Protectors</h1>
          <nav>
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-blue-600 hover:underline transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto p-4 sm:p-6 md:p-8">
          <div className="bg-white shadow-md rounded p-4 md:p-6 lg:p-8 flex flex-col md:flex-row items-center gap-6">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/images/splash-protectors.jpeg"
                alt="Splash Protectors"
                width={500}
                height={300}
                priority
                loading="eager"
                className="rounded transform transition duration-500 hover:scale-110 max-w-full"
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-center md:text-left">ShoeUmbrella Pro 2025</h2>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Erleben Sie die neueste Innovation im Schuhschutz: der <strong>ShoeUmbrella Pro 2025</strong>! Diese
                hochmodernen Mini-Regenschirme für Ihre Schuhe bieten einen unvergleichlichen Schutz vor Regen, Schnee
                und Spritzern, sodass Ihre Schuhe jederzeit trocken und sauber bleiben.
              </p>
              <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
                <li>Hochfester, wasserabweisender Nano-Nylon-Stoff</li>
                <li>Verfügbar in 5 stilvollen Farben</li>
                <li>Rutschfeste elastische Bänder mit Schnellverschluss</li>
                <li>Windwiderstand: Getestet bis 25 km/h</li>
              </ul>
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-orange-600">CHF 39.99</span>
                <button 
                  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 hover:scale-105 shadow-md hover:shadow-lg transition duration-300" 
                  aria-label="In den Warenkorb"
                >
                  In den Warenkorb
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 px-4 mt-8">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <p className="text-sm md:text-base">© 2025 Productify. Alle Rechte vorbehalten.</p>
          <nav className="flex space-x-4">
            <Link 
              href="/datenschutz"
              className="hover:underline text-gray-400 hover:text-white transition duration-300"
            >
              Datenschutz
            </Link>
            <Link 
              href="/agb"
              className="hover:underline text-gray-400 hover:text-white transition duration-300"
            >
              AGB
            </Link>
            <Link 
              href="/support"
              className="hover:underline text-gray-400 hover:text-white transition duration-300"
            >
              Support
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}