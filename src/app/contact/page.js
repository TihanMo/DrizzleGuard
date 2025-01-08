import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        <div className="container mx-auto p-6 sm:p-8 md:p-12">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-4xl font-bold mb-6 text-center text-green-700">Kontaktieren Sie uns</h1>

            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500" required />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500" required />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Nachricht:</label>
                <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500" required></textarea>
              </div>

              <button type="submit" className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                Senden
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}