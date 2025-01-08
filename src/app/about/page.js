import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto p-6 sm:p-8 md:p-12">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-4xl font-bold mb-6 text-center text-green-700">Über uns</h1>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Willkommen bei Splash Protectors! Wir sind darauf spezialisiert, innovative Lösungen zu bieten, um Ihre Schuhe trocken und sauber zu halten. Unser Flaggschiff-Produkt, der ShoeUmbrella Pro 2025, bietet unvergleichlichen Schutz vor Regen, Schnee und Spritzern.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Unsere Mission ist es, Stil und Funktionalität zu vereinen, damit Sie bei jedem Wetter selbstbewusst auftreten können. Mit einem Engagement für Qualität und Kundenzufriedenheit streben wir danach, Produkte zu liefern, die den höchsten Standards entsprechen.
            </p>
            <h2 className="text-3xl font-bold mb-4 text-green-700">Unsere Werte</h2>
            <ul className="list-disc list-inside mb-6 text-lg">
              <li>Innovation: Ständige Verbesserung unserer Produkte, um Ihre Bedürfnisse zu erfüllen.</li>
              <li>Qualität: Verwendung der besten Materialien, um Haltbarkeit und Effektivität zu gewährleisten.</li>
              <li>Kundenzufriedenheit: Hervorragender Service und Unterstützung.</li>
            </ul>
            <h2 className="text-3xl font-bold mb-4 text-green-700">Kontaktieren Sie uns</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Wenn Sie Fragen oder Feedback haben, können Sie uns gerne unter <a href="mailto:contact@splashprotectors.com" className="text-blue-600 hover:underline">contact@splashprotectors.com</a> erreichen.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}