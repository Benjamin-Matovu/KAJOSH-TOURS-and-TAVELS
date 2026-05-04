'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchStore } from '../../store/searchStore';
import { MOCK_AIRPORTS } from '../../lib/mockData';
import { Airport } from '../../lib/types';
import { PlaneTakeoff, PlaneLanding, X, MapPin } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface Props {
  type: 'origin' | 'destination';
  error?: boolean;
}

export function AirportAutocomplete({ type, error }: Props) {
  const { origin, destination, setOrigin, setDestination } = useSearchStore();
  
  const selectedAirport = type === 'origin' ? origin : destination;
  const setSelectedAirport = type === 'origin' ? setOrigin : setDestination;
  
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Airport[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length >= 2) {
      const lowerQuery = query.toLowerCase();
      const filtered = MOCK_AIRPORTS.filter(
        a => a.name.toLowerCase().includes(lowerQuery) || 
             a.city.toLowerCase().includes(lowerQuery) || 
             a.iataCode.toLowerCase().includes(lowerQuery) ||
             a.country.toLowerCase().includes(lowerQuery)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const Icon = type === 'origin' ? PlaneTakeoff : PlaneLanding;

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div className={twMerge(
        clsx(
          "flex items-center bg-white dark:bg-background-dark rounded-lg px-4 py-3 border focus-within:ring-2 focus-within:ring-primary transition-all",
          error ? "border-red-500" : "border-gray-200 dark:border-gray-700"
        )
      )}>
        <Icon className="w-5 h-5 text-gray-400 mr-3" />
        
        {selectedAirport ? (
          <div className="flex-1 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-textPrimary-light dark:text-textPrimary-dark">
                {selectedAirport.city} ({selectedAirport.iataCode})
              </span>
              <span className="text-xs text-textSecondary-light dark:text-textSecondary-dark truncate">
                {selectedAirport.name}
              </span>
            </div>
            <button 
              onClick={() => {
                setSelectedAirport(null);
                setQuery('');
                setTimeout(() => setIsOpen(true), 0);
              }}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        ) : (
          <input
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-textPrimary-light dark:text-textPrimary-dark placeholder-gray-400 text-sm w-full"
            placeholder={type === 'origin' ? "Where from?" : "Where to?"}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
          />
        )}
      </div>

      {isOpen && !selectedAirport && query.length >= 2 && (
        <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white dark:bg-background-dark rounded-lg shadow-xl border border-gray-100 dark:border-gray-800 max-h-60 overflow-y-auto">
          {results.length > 0 ? (
            <ul>
              {results.map((airport) => (
                <li 
                  key={airport.id}
                  onClick={() => {
                    setSelectedAirport(airport);
                    setIsOpen(false);
                    setQuery('');
                  }}
                  className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer border-b border-gray-50 dark:border-gray-800 last:border-0"
                >
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-gray-400 mr-3" />
                    <div>
                      <div className="text-sm font-medium text-textPrimary-light dark:text-textPrimary-dark">
                        {airport.city}, {airport.country}
                      </div>
                      <div className="text-xs text-textSecondary-light dark:text-textSecondary-dark">
                        {airport.name}
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold">
                    {airport.iataCode}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500 text-center">
              No airports found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
