'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CurrencySelector } from './CurrencySelector';
import { useTheme } from 'next-themes';
import { Button } from '../ui/Button';
import { useSearchStore } from '../../store/searchStore';
import { Search, Plane } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { useAuth } from '../../context/AuthContext';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { user, signOut } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  const { origin, destination, departureDate, returnDate, passengers, tripType } = useSearchStore();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let dateText = 'Dates';
  if (departureDate) {
    dateText = format(parseISO(departureDate), 'MMM d');
    if (tripType === 'return' && returnDate) {
      dateText += ` - ${format(parseISO(returnDate), 'MMM d')}`;
    }
  }

  const showMiniSearch = isScrolled || pathname.startsWith('/search');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHeroPage = ['/', '/hotels', '/car-hire'].includes(pathname);
  const navBg = isHeroPage && !isScrolled ? 'bg-transparent border-transparent' : 'bg-white/90 dark:bg-[#05203c]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm';
  const textColor = isHeroPage && !isScrolled ? 'text-white' : 'text-slate-800 dark:text-white';
  const logoColor = isHeroPage && !isScrolled ? 'text-white' : 'text-primary';

  const navLinks = [
    { name: 'Flights', href: '/', active: pathname === '/' },
    { name: 'Hotels', href: '/hotels', active: pathname === '/hotels' },
    { name: 'Car Hire', href: '/car-hire', active: pathname === '/car-hire' },
  ];

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 mr-10 group">
              <div className={`p-1.5 rounded-lg ${isHeroPage && !isScrolled ? 'bg-white/10' : 'bg-primary/10'}`}>
                <Plane className={`w-6 h-6 ${logoColor} transition-colors`} />
              </div>
              <span className={`font-black text-2xl tracking-tighter ${logoColor} transition-colors`}>KAJOSH TOURS</span>
            </Link>
            
            {!showMiniSearch && (
              <div className="hidden lg:flex space-x-8 h-20">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    className={`inline-flex items-center px-1 pt-1 text-sm font-black uppercase tracking-widest transition-all relative group h-full`}
                  >
                    <span className={`${link.active ? 'text-primary' : textColor} group-hover:text-primary transition-colors`}>
                      {link.name}
                    </span>
                    {link.active && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full shadow-[0_-4px_12px_rgba(37,99,235,0.4)]" />
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {showMiniSearch && (
            <div className="flex-1 flex justify-center mx-4 animate-in fade-in slide-in-from-top-2">
              <button 
                onClick={scrollToTop}
                className="flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg hover:shadow-xl transition-all py-2 px-6 max-w-xl w-full"
              >
                <div className="flex-1 text-sm font-black truncate text-left px-2 border-r border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white">
                  {origin ? origin.iataCode : 'Where from'} 
                  <span className="mx-3 text-slate-300">→</span> 
                  {destination ? destination.iataCode : 'Where to'}
                </div>
                <div className="hidden sm:block text-xs font-bold text-slate-400 truncate px-6 border-r border-slate-200 dark:border-slate-700 uppercase tracking-widest">
                  {dateText}
                </div>
                <div className="bg-primary p-2 rounded-full text-white ml-3 shadow-lg shadow-primary/20">
                  <Search className="w-4 h-4" />
                </div>
              </button>
            </div>
          )}

          <div className="flex items-center gap-6">
            <div className={`hidden md:flex items-center gap-6 ${isHeroPage && !isScrolled ? 'text-white' : 'text-slate-600 dark:text-slate-400'}`}>
              <Link href="/help" className="text-sm font-bold hover:opacity-70 transition-opacity">Help</Link>
              
              {user ? (
                <div className="flex items-center gap-6">
                  <Link href="/account" className="flex items-center gap-2 text-sm font-bold hover:opacity-70 transition-opacity">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary border border-primary/20">
                      {user.email?.[0].toUpperCase()}
                    </div>
                    <span>My Account</span>
                  </Link>
                  <button 
                    onClick={() => signOut()}
                    className="text-sm font-bold text-slate-400 hover:text-red-500 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link href="/login" className="flex items-center gap-2 text-sm font-bold hover:opacity-70 transition-opacity">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  Log in
                </Link>
              )}
            </div>
            
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2.5 rounded-xl transition-all active:scale-95 flex items-center justify-center ${
                isHeroPage && !isScrolled 
                  ? 'bg-white/10 text-white hover:bg-white/20' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {!mounted ? (
                <div className="w-5 h-5" />
              ) : theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l.707.707M6.343 6.343l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
