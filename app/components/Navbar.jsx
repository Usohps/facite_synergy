'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import navLinks from "../../app/constants/navLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  // Active section tracking using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -40% 0px', threshold: 0.3 }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.href.slice(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const renderLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        onClick={() => isMobile && closeSidebar()}
        className={`text-gray-700 hover:text-blue-600 transition ${
          activeId === link.href.slice(1) ? 'text-blue-600 font-semibold' : ''
        }`}
      >
        {link.name}
      </a>
    ));

  return (
    <>
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">FACITE SYNERGY</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">{renderLinks()}</nav>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleSidebar} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-4 py-6">
              {renderLinks(true)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
