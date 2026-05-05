'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchStore } from '../../store/searchStore';
import { TripTypeToggle } from './TripTypeToggle';
import { AirportAutocomplete } from './AirportAutocomplete';
import { DatePicker } from './DatePicker';
import { PassengerSelector } from './PassengerSelector';
import { CabinClassSelector } from './CabinClassSelector';
import { Search, ArrowRightLeft, Loader2, Plane } from 'lucide-react';
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
    <div className="w-full max-w-6xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tight leading-tight">
        Millions of cheap flights.<br/>One simple search.
      </h1>

      <div className="bg-white rounded-xl shadow-2xl flex flex-col lg:flex-row items-stretch border-2 border-white relative">
        {/* From */}
        <div className="flex-1 min-w-0 border-r border-slate-200 p-4 hover:bg-slate-50 transition-colors cursor-pointer group relative">
          <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">From</span>
          <AirportAutocomplete type="origin" error={!!errors.origin} />
          <button 
            onClick={handleSwap}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white border border-slate-200 p-1.5 rounded-full shadow-md hover:rotate-180 transition-all duration-300"
          >
            <ArrowRightLeft className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        {/* To */}
        <div className="flex-1 min-w-0 border-r border-slate-200 p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
          <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">To</span>
          <AirportAutocomplete type="destination" error={!!errors.destination} />
        </div>

        {/* Depart */}
        <div className="flex-1 min-w-0 border-r border-slate-200 p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
          <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Depart</span>
          <DatePicker type="departure" error={!!errors.departure} />
        </div>

        {/* Return */}
        <div className="flex-1 min-w-0 border-r border-slate-200 p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
          <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Return</span>
          <DatePicker type="return" error={!!errors.return} />
        </div>

        {/* Travellers */}
        <div className="flex-1 min-w-0 p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
          <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Travellers & Class</span>
          <div className="flex items-center justify-between">
            <PassengerSelector />
            <CabinClassSelector />
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="bg-primary hover:bg-blue-700 text-white px-10 py-6 font-black text-xl transition-all flex items-center justify-center min-w-[160px] active:scale-95"
        >
          {isLoading ? <Loader2 className="w-8 h-8 animate-spin" /> : 'Search'}
        </button>
      </div>

      {/* Options */}
      <div className="flex gap-6 mt-4 text-white text-sm font-bold">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 rounded accent-primary" />
          Add nearby airports
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 rounded accent-primary" />
          Direct flights
        </label>
      </div>
    </div>
  );
}
