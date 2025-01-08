import Link from 'next/link';

const navItems = ["Home", "About", "Contact"];

export default function Header() {
  return (
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
  );
}