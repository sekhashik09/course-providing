import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaBookReader, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for authentication
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // Logout logic here
      setIsLoggedIn(false); // Simulating logout
    } else {
      // Redirect to login page
      window.location.href = '/login'; // Replace with a React Router navigate or Link
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${isSticky ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <nav className="flex justify-between items-center px-6 lg:px-24 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold flex items-center gap-2 text-gray-800 hover:text-blue-600 transition duration-300"
        >
          <FaBookReader />
          QuanTify
        </Link>

        {/* Category, Courses, and SearchBar (Desktop View) */}
        <div className="flex items-center space-x-8">
          {/* Category Dropdown */}
          <div className="relative">
            <button className="text-lg text-gray-700 hover:text-blue-600 transition duration-300">
              Category
            </button>
            {/* Category Dropdown (Add your categories here) */}
            <div className="absolute left-0 mt-2 w-48 bg-white border shadow-md">
              <ul>
                <li>
                  <Link
                    to="/category/tech"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Tech
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/science"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Science
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/arts"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Arts
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Courses Dropdown */}
          <div className="relative">
            <button className="text-lg text-gray-700 hover:text-blue-600 transition duration-300">
              Courses
            </button>
            {/* Courses Dropdown */}
            <div className="absolute left-0 mt-2 w-48 bg-white border shadow-md">
              <ul>
                <li>
                  <Link
                    to="/course/web-development"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/course/yoga"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Yoga
                  </Link>
                </li>
                <li>
                  <Link
                    to="/course/data-science"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Data Science
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <button type="submit" className="text-gray-700">
              <FaSearch size={20} />
            </button>
          </form>
        </div>

        {/* Auth Button */}
        <div>
          <button
            onClick={handleAuthAction}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300"
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 left-0 w-full bg-white shadow-md transform ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          } transition-transform duration-300 md:hidden`}
        >
          <div className="flex flex-col items-center space-y-4 py-6">
            <Link
              to="/category"
              className="text-lg text-gray-700 hover:text-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Category
            </Link>
            <Link
              to="/courses"
              className="text-lg text-gray-700 hover:text-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <form onSubmit={handleSearch} className="flex items-center space-x-2 w-full px-4 py-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              <button type="submit" className="text-gray-700">
                <FaSearch size={20} />
              </button>
            </form>
            <button
              onClick={handleAuthAction}
              className="w-full text-center px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300"
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
