'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchStore } from '../../store/searchStore';
import { TripTypeToggle } from './TripTypeToggle';
import { AirportAutocomplete } from './AirportAutocomplete';
import { DatePicker } from './DatePicker';
import { PassengerSelector } from './PassengerSelector';
import { CabinClassSelector } from './CabinClassSelector';
import { Search, ArrowRightLeft, Loader2 } from 'lucide-react';
import { isBefore, parseISO } from 'date-fns';

export function SearchBar() {
  const router = useRouter();
  const { origin, destination, departureDate, returnDate, tripType, passengers, cabinClass, currency, setOrigin, setDestination } = useSearchStore();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSwap = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!origin) newErrors.origin = 'Origin is required';
    if (!destination) newErrors.destination = 'Destination is required';
    if (origin && destination && origin.id === destination.id) {
      newErrors.destination = 'Origin and destination must be different';
    }

    if (!departureDate) newErrors.departure = 'Departure date is required';

    if (tripType === 'return') {
      if (!returnDate) {
        newErrors.return = 'Return date is required';
      } else if (departureDate && isBefore(parseISO(returnDate), parseISO(departureDate))) {
        newErrors.return = 'Return date must be after departure';
      }
    }

    if (passengers.adults < 1) newErrors.passengers = 'At least 1 adult required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = () => {
    if (!validate()) return;

    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      const params = new URLSearchParams();
      if (origin) params.append('from', origin.iataCode);
      if (destination) params.append('to', destination.iataCode);
      if (departureDate) params.append('departure', departureDate);
      if (returnDate && tripType === 'return') params.append('return', returnDate);
      params.append('tripType', tripType);
      params.append('adults', passengers.adults.toString());
      params.append('children', passengers.children.toString());
      params.append('infants', passengers.infants.toString());
      params.append('cabin', cabinClass);
      params.append('currency', currency);

      router.push(`/search/results?${params.toString()}`);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/20 dark:border-white/10">
      <TripTypeToggle />

      <div className="flex flex-col space-y-4">
        {/* Row 1: Locations */}
        <div className="flex flex-col md:flex-row items-center gap-4 relative">
          <div className="w-full">
            <AirportAutocomplete type="origin" error={!!errors.origin} />
            {errors.origin && <p className="text-red-500 text-xs mt-1 absolute">{errors.origin}</p>}
          </div>

          <button 
            onClick={handleSwap}
            className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10 bg-white dark:bg-background-dark p-2 rounded-full shadow-md border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <ArrowRightLeft className="w-4 h-4 text-primary" />
          </button>

          <div className="w-full">
            <AirportAutocomplete type="destination" error={!!errors.destination} />
            {errors.destination && <p className="text-red-500 text-xs mt-1 absolute">{errors.destination}</p>}
          </div>
        </div>

        {/* Row 2 & 3: Dates & Options */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="flex flex-col md:flex-row gap-4 flex-1">
            <div className="w-full">
              <DatePicker type="departure" error={!!errors.departure} />
              {errors.departure && <p className="text-red-500 text-xs mt-1 absolute">{errors.departure}</p>}
            </div>
            
            {(tripType === 'return' || tripType === 'multi-city') && (
              <div className="w-full">
                <DatePicker type="return" error={!!errors.return} />
                {errors.return && <p className="text-red-500 text-xs mt-1 absolute">{errors.return}</p>}
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-4 flex-1">
            <PassengerSelector />
            <CabinClassSelector />
          </div>

          <button
            onClick={handleSearch}
            disabled={isLoading}
            className="w-full md:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors flex items-center justify-center min-w-[140px]"
          >
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <>
                <Search className="w-5 h-5 mr-2" />
                Search
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
