'use client';

import React from 'react';
import { FilterState } from '../../../lib/utils/filterFlights';

interface Props {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  availableAirlines: string[];
}

export function FilterSidebar({ filters, setFilters, availableAirlines }: Props) {
  
  const handleStopsChange = (stop: number) => {
    setFilters(prev => {
      const newStops = prev.stops.includes(stop) 
        ? prev.stops.filter(s => s !== stop)
        : [...prev.stops, stop];
      return { ...prev, stops: newStops };
    });
  };

  const handleAirlineChange = (airline: string) => {
    setFilters(prev => {
      const newAirlines = prev.airlines.includes(airline)
        ? prev.airlines.filter(a => a !== airline)
        : [...prev.airlines, airline];
      return { ...prev, airlines: newAirlines };
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({
      ...prev,
      priceRange: [prev.priceRange[0], parseInt(e.target.value)]
    }));
  };

  return (
    <div className="w-full bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 sticky top-24">
      <h3 className="font-bold text-lg mb-6 text-textPrimary-light dark:text-textPrimary-dark">Filters</h3>

      {/* Stops */}
      <div className="mb-8">
        <h4 className="font-bold text-sm mb-3 text-textPrimary-light dark:text-textPrimary-dark">Stops</h4>
        <div className="space-y-2">
          {[
            { label: 'Direct', value: 0 },
            { label: '1 Stop', value: 1 },
            { label: '2+ Stops', value: 2 },
          ].map(stop => (
            <label key={stop.value} className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={filters.stops.includes(stop.value)}
                onChange={() => handleStopsChange(stop.value)}
                className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-textSecondary-light dark:text-textSecondary-dark">{stop.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Airlines */}
      <div className="mb-8">
        <h4 className="font-bold text-sm mb-3 text-textPrimary-light dark:text-textPrimary-dark">Airlines</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
          {availableAirlines.map(airline => (
            <label key={airline} className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={filters.airlines.includes(airline)}
                onChange={() => handleAirlineChange(airline)}
                className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-textSecondary-light dark:text-textSecondary-dark truncate" title={airline}>
                {airline}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h4 className="font-bold text-sm mb-3 text-textPrimary-light dark:text-textPrimary-dark flex justify-between">
          <span>Max Price</span>
          <span className="text-primary">${filters.priceRange[1]}</span>
        </h4>
        <input 
          type="range" 
          min="100" 
          max="3000" 
          step="50"
          value={filters.priceRange[1]}
          onChange={handlePriceChange}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-xs text-textSecondary-light dark:text-textSecondary-dark mt-1">
          <span>$100</span>
          <span>$3000</span>
        </div>
      </div>

    </div>
  );
}
