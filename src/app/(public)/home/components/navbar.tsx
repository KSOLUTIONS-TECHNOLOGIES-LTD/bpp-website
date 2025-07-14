


'use client';

import { useState } from 'react';
import { Link } from 'react-router';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
        { label: 'Background', href: '/who-are-we' },
        { label: 'Core Objectives', href: '/who-we-are/mission-vision' },
        { label: 'DGS Corner', href: '/dgscorner' },
        { label: 'Vision', href: '/who-we-are/structure' },
        { label: 'Mission', href: '/who-we-are/structure' },
        { label: 'Function of the Bureau', href: '/FunctionsOfTheBureau' },
      ]
    },
    {
      label: 'Applications',
      href: '/applications',
      submenu: true,
      items: [
        { label: 'All Applications', href: '/applications' },
        { label: 'Contractor Consultant Service Provider', href: '/contractor' },
        { label: 'Procurement Officer Conversion Registration', href: '/applications/status' },
        { label: 'Procurement Officer Management Database', href: '/applications/renewal' },
        { label: 'Nigeria Open Contracting Portal', href: '/applications/renewal' },
        { label: 'Price Checker Portal', href: '/applications/renewal' },
        { label: 'Submission Portal', href: '/applications/renewal' },
      ]
    },
    {
      label: 'Petitions',
      href: '#',
      submenu: true,
      items: [
        { label: 'Petition Submission', href: '/petition' },
        { label: 'Petition Summary', href: '/PetitionSummary' },
      ]
    },
    {
      label: 'Trainings',
      href: 'trainings',
      submenu: true,
      highlight: true,
      items: [{ label: 'Trainings', href: '/trainings' }]
    },
    { label: 'Contact', href: '/contacts', external: true },
    { label: 'News', href: '/news', external: true },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="w-full h-1 bg-gradient-to-r from-green-800 via-green-400 to-green-800" />

      {/* Top Info Bar */}
      <div className="relative bg-[#1C3F3A] text-white py-2 text-sm font-semibold text-center">
        INFO@BPP.GOV.NG
        <a
          href="https://www.pebec.gov.ng/reportgov-ng"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          <img src="/assets/images/rep.png" alt="Logo" className="h-6" />
        </a>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm md:px-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/assets/images/logo.png" alt="Logo" className="h-12 w-auto" />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 items-center relative">
              {navItems.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div
                    onClick={() => toggleDropdown(item.label)}
                    className={`text-[14px] font-[400] no-underline text-gray-900 hover:text-green-700 flex items-center space-x-1 cursor-pointer ${
                      item.highlight ? 'relative z-10' : ''
                    }`}
                  >
                    <span>{item.label.toUpperCase()}</span>
                    {item.external && <NorthEastIcon className="text-xs" fontSize="inherit" />}
                    {item.submenu && <KeyboardArrowDownIcon className="text-gray-600" />}
                  </div>

                  {item.submenu && item.items && (
                    <div
                      className={`
                        absolute left-0 w-56 bg-white shadow-md rounded z-20 overflow-hidden transition-all duration-200
                        ${activeDropdown === item.label ? 'block' : 'hidden'} group-hover:block
                      `}
                      style={{ top: '100%' }}
                    >
                      <ul className="text-sm text-gray-800">
                        {item.items.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              to={sub.href}
                              className="text-gray-800 block px-4 py-2 hover:bg-gray-100 no-underline"
                            >
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

            {/* Mobile Toggle Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-green-800">
                {menuOpen ? <CloseIcon fontSize="medium" /> : <MenuIcon fontSize="medium" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3">
            {navItems.map((item, idx) => (
              <div key={idx}>
                <div
                  className="flex items-center justify-between text-sm font-medium text-gray-900 hover:text-green-700 cursor-pointer"
                  onClick={() => toggleDropdown(item.label)}
                >
                  <span>{item.label.toUpperCase()}</span>
                  {item.external && <NorthEastIcon className="ml-1" fontSize="inherit" />}
                  {item.submenu && <KeyboardArrowDownIcon />}
                </div>

                {item.submenu && activeDropdown === item.label && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.items.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        to={sub.href}
                        className="block text-sm text-gray-700 hover:text-green-700 no-underline"
                      >
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
