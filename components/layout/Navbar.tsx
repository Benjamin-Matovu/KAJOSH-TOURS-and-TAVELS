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

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  const { origin, destination, departureDate, returnDate, passengers, tripType } = useSearchStore();

  useEffect(() => {
    const handleScroll = () => {
      // 300px roughly after the hero headline
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

  let dateText = 'Dates';
  if (departureDate) {
    dateText = format(parseISO(departureDate), 'MMM d');
    if (tripType === 'return' && returnDate) {
      dateText += ` - ${format(parseISO(returnDate), 'MMM d')}`;
    }
  }

  // Always show mini search bar on /search/results, otherwise show based on scroll
  const showMiniSearch = isScrolled || pathname.startsWith('/search');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-borderC-light dark:border-borderC-dark bg-surface-light/80 dark:bg-surface-dark/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 mr-8">
              <Plane className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl text-primary tracking-tight hidden sm:block">KAJOSH TOURS</span>
            </Link>
            
            {/* Desktop Navigation Links */}
            {!showMiniSearch && (
              <div className="hidden lg:flex space-x-8">
                <Link href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-textPrimary-light dark:text-textPrimary-dark border-b-2 border-primary">Flights</Link>
                <Link href="/hotels" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-textSecondary-light dark:text-textSecondary-dark hover:border-gray-300 hover:text-gray-700">Hotels</Link>
                <Link href="/car-hire" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-textSecondary-light dark:text-textSecondary-dark hover:border-gray-300 hover:text-gray-700">Car Hire</Link>
                <Link href="/explore" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-textSecondary-light dark:text-textSecondary-dark hover:border-gray-300 hover:text-gray-700">Explore</Link>
              </div>
            )}
          </div>

          {/* Mini Search Bar */}
          {showMiniSearch && (
            <div className="flex-1 flex justify-center mx-4">
              <button 
                onClick={scrollToTop}
                className="flex items-center bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-full shadow-sm hover:shadow-md transition-shadow py-2 px-4 max-w-xl w-full truncate"
              >
                <div className="flex-1 text-sm font-medium truncate text-left px-2 border-r border-gray-200 dark:border-gray-700">
                  {origin ? origin.iataCode : 'Where from'} 
                  <span className="mx-2 text-gray-400">→</span> 
                  {destination ? destination.iataCode : 'Where to'}
                </div>
                <div className="hidden sm:block text-sm text-gray-500 truncate px-4 border-r border-gray-200 dark:border-gray-700">
                  {dateText}
                </div>
                <div className="hidden sm:block text-sm text-gray-500 px-4">
                  {totalPassengers} {totalPassengers === 1 ? 'Pax' : 'Pax'}
                </div>
                <div className="bg-primary p-1.5 rounded-full text-white ml-2">
                  <Search className="w-4 h-4" />
                </div>
              </button>
            </div>
          )}

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:block">
              <CurrencySelector />
            </div>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full text-textSecondary-light dark:text-textSecondary-dark hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <div className="hidden sm:flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link href="/signup">
                <Button variant="primary">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
