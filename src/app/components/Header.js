import Link from 'next/link';

const navItems = ["Home", "About", "Contact"];

export default function Header() {
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-600 mr-2"
            >
              <path d="M12 2L2 22h20L12 2z" />
              <circle cx="12" cy="15" r="3" fill="white" />
            </svg>
            <span className="text-lg font-bold text-green-600">Splash Protectors</span>
          </div>
        </Link>
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
  );
}