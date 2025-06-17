'use client';

import { useState } from 'react';
import { Link } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NorthEastIcon from '@mui/icons-material/NorthEast';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const navItems = [
    { label: 'Home', href: '/home', external: true },
    {
      label: 'Who Are We',
      href: '/who-are-we',
      submenu: true,
      items: [
        { label: 'Mandate', href: '/who-we-are/mandate' },
        { label: 'Mission & Vision', href: '/who-we-are/mission-vision' },
        { label: 'Our Structure', href: '/who-we-are/structure' },
      ]
    },
    {
      label: 'Applications',
      href: '/applications',
      submenu: true,
      items: [
        { label: 'New Application', href: '/applications/new' },
        { label: 'Check Status', href: '/applications/status' },
        { label: 'Renewal', href: '/applications/renewal' },
      ]
    },
    { label: 'Petitions', href: '#', submenu: true },
    { label: 'Trainings', href: '#', submenu: true, highlight: true },
    { label: 'Contact', href: '/contact', external: true },
    { label: 'News', href: '/news', external: true },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header className='w-full fixed top-0 z-50'>
      <div className="bg-[#1C3F3A] text-white text-center py-1 text-sm plus text-[12px] font-[600]">
        INFO@BPP.GOV.NG
      </div>
      <nav className="bg-white shadow-sm md:px-12 plus">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/assets/images/logo.png" alt="Logo" className="h-12 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center relative">
              {navItems.map((item, idx) => (
                <div key={idx} className="relative">
                  <Link
                    to={item.href}
                    onClick={item.submenu ? (e) => { e.preventDefault(); toggleDropdown(item.label); } : undefined}
                    className={`text-[12px] font-[500] text-gray-900 hover:text-green-700 flex items-center space-x-1 pb-1 ${item.highlight ? 'relative z-10' : ''}`}
                  >
                    <span>{item.label.toUpperCase()}</span>
                    {item.external && <NorthEastIcon className="text-xs" fontSize="inherit" />}
                    {item.submenu && <ArrowDropDownIcon fontSize="small" />}
                  </Link>

                  {/* Dropdown menu */}
                  {item.submenu && activeDropdown === item.label && item.items && (
                    <div className="absolute top-full left-0 bg-white shadow-md mt-1 rounded w-56 z-20">
                      <ul className="text-sm text-gray-800">
                        {item.items.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <Link to={sub.href} className="block px-4 py-2 hover:bg-gray-100">
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
              <button className="text-green-800 text-lg">
                <SearchIcon />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-green-800">
                {menuOpen ? <CloseIcon fontSize="medium" /> : <MenuIcon fontSize="medium" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3">
            {navItems.map((item, idx) => (
              <div key={idx}>
                <Link
                  to={item.href}
                  className={`block text-sm font-medium text-gray-900 hover:text-green-700 ${item.highlight ? 'border-b-4 border-green-700 pb-1' : ''}`}
                  onClick={item.submenu ? (e) => e.preventDefault() : undefined}
                >
                  <span>{item.label.toUpperCase()}</span>
                  {item.external && <NorthEastIcon className="ml-1" fontSize="inherit" />}
                  {item.submenu && <ArrowDropDownIcon fontSize="small" />}
                </Link>
                {item.submenu && item.items && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.items.map((sub, subIdx) => (
                      <Link key={subIdx} to={sub.href} className="block text-sm text-gray-700 hover:text-green-700">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="text-green-800">
              <SearchIcon />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
