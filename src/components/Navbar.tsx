import { Car } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <Car className="h-10 w-10 bg-gradient-to-r from-blue-400 to-blue-500 text-white p-2 rounded-lg" />
            <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              SparkleWash
            </span>
          </Link>
          
          <div className="flex space-x-2">
            <NavLink to="/about" active={location.pathname === '/about'}>About</NavLink>
            <NavLink to="/features" active={location.pathname === '/features'}>Features</NavLink>
            <NavLink to="/products" active={location.pathname === '/products'}>Products</NavLink>
            <NavLink to="/blog" active={location.pathname === '/blog'}>Blog</NavLink>
            <NavLink to="/faq" active={location.pathname === '/faq'}>FAQ</NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={`relative px-4 py-2 rounded-full font-medium group overflow-hidden ${
        active ? 'text-white' : 'text-gray-600'
      }`}
    >
      <span className={`absolute inset-0 w-full h-full ${
        active 
          ? 'bg-gradient-to-r from-blue-400 to-blue-500'
          : 'bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100'
      } transition-all duration-300 transform ${
        active ? 'scale-100' : 'scale-0 group-hover:scale-100'
      } rounded-full`}
      />
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
    </Link>
  );
}