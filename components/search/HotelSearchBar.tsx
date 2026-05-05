'use client';

import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search, Loader2 } from 'lucide-react';

export function HotelSearchBar() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row items-stretch border-2 border-white">
        {/* Destination */}
        <div className="flex-[1.5] min-w-0 border-r border-slate-100 p-6 hover:bg-slate-50 transition-colors cursor-pointer group relative">
          <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Destination</span>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <input 
              type="text" 
              placeholder="Where are you going?" 
              className="bg-transparent border-none outline-none font-bold text-slate-800 placeholder:text-slate-400 w-full"
            />
          </div>
        </div>

        {/* Check-in / Check-out */}
        <div className="flex-1 min-w-0 border-r border-slate-100 p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
          <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Check-in — Check-out</span>
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-bold text-slate-800">Add dates</span>
          </div>
        </div>

        {/* Guests */}
        <div className="flex-1 min-w-0 p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
          <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Guests & Rooms</span>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-primary" />
            <span className="font-bold text-slate-800">2 guests, 1 room</span>
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="bg-primary hover:bg-blue-700 text-white px-12 py-6 font-black text-xl transition-all flex items-center justify-center min-w-[180px] active:scale-95"
        >
          {isLoading ? <Loader2 className="w-8 h-8 animate-spin" /> : 'Search Hotels'}
        </button>
      </div>
    </div>
  );
}
