'use client';

import React, { useState } from 'react';
import { MapPin, Calendar, Search, Loader2, Car } from 'lucide-react';

export function CarHireSearchBar() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row items-stretch border-2 border-white">
        {/* Pick-up Location */}
        <div className="flex-[1.2] min-w-0 border-r border-slate-100 p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
          <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Pick-up Location</span>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <input 
              type="text" 
              placeholder="Airport, city or station" 
              className="bg-transparent border-none outline-none font-bold text-slate-800 placeholder:text-slate-400 w-full"
            />
          </div>
        </div>

        {/* Pick-up Date */}
        <div className="flex-1 min-w-0 border-r border-slate-100 p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
          <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Pick-up Date & Time</span>
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-bold text-slate-800">Add date</span>
          </div>
        </div>

        {/* Drop-off Date */}
        <div className="flex-1 min-w-0 border-r border-slate-100 p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
          <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Drop-off Date & Time</span>
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-bold text-slate-800">Add date</span>
          </div>
        </div>

        {/* Car Type / Driver */}
        <div className="flex-1 min-w-0 p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
          <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Driver's Age</span>
          <div className="flex items-center gap-3">
            <Car className="w-5 h-5 text-primary" />
            <span className="font-bold text-slate-800">25 - 70 years</span>
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="bg-primary hover:bg-blue-700 text-white px-12 py-6 font-black text-xl transition-all flex items-center justify-center min-w-[180px] active:scale-95"
        >
          {isLoading ? <Loader2 className="w-8 h-8 animate-spin" /> : 'Search Cars'}
        </button>
      </div>
    </div>
  );
}
