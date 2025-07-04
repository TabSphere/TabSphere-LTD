import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('clientToken');
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('clientToken');
    localStorage.removeItem('clientData');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  const services = [
    { name: 'Software & SaaS Solutions', href: '/services#software' },
    { name: 'Web & E-commerce Development', href: '/services#web' },
    { name: 'Creative & Brand Design', href: '/services#design' },
    { name: 'Computer Cleaning', href: '/services#cleaning' },
    { name: 'Cybersecurity & Compliance', href: '/services#security' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/b72ad6b7-b0b0-4286-a4ac-4f837cef6d68/2ae4d9b38ed486bca5e1f3f026c70729.jpg" alt="TabSphere Logo" className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link text-gray-700 hover:text-orange-600 font-medium">
              Home
            </Link>
            <Link to="/about" className="nav-link text-gray-700 hover:text-orange-600 font-medium">
              About
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link text-gray-700 hover:text-orange-600 font-medium flex items-center space-x-1 outline-none">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link to={service.href} className="w-full">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/portfolio" className="nav-link text-gray-700 hover:text-orange-600 font-medium">
              Portfolio
            </Link>
            <Link to="/blog" className="nav-link text-gray-700 hover:text-orange-600 font-medium">
              Blog
            </Link>
            <Link to="/contact" className="nav-link text-gray-700 hover:text-orange-600 font-medium">
              Contact
            </Link>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Account</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/client-login">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  Client Login
                </Button>
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-2 space-y-2">
              <Link to="/" className="block py-2 text-gray-700 hover:text-orange-600">Home</Link>
              <Link to="/about" className="block py-2 text-gray-700 hover:text-orange-600">About</Link>
              <Link to="/services" className="block py-2 text-gray-700 hover:text-orange-600">Services</Link>
              <Link to="/portfolio" className="block py-2 text-gray-700 hover:text-orange-600">Portfolio</Link>
              <Link to="/blog" className="block py-2 text-gray-700 hover:text-orange-600">Blog</Link>
              <Link to="/contact" className="block py-2 text-gray-700 hover:text-orange-600">Contact</Link>
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" className="block py-2 text-gray-700 hover:text-orange-600">Dashboard</Link>
                  <button onClick={handleLogout} className="block py-2 text-gray-700 hover:text-orange-600 w-full text-left">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/client-login" className="block py-2 text-orange-600 font-medium">Client Login</Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;