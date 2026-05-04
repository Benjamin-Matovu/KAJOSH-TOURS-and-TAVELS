'use client';

import React from 'react';
import { useSearchStore } from '../../store/searchStore';
import { Calendar, X } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface Props {
  type: 'departure' | 'return';
  error?: boolean;
}

export function DatePicker({ type, error }: Props) {
  const { departureDate, returnDate, setDates, tripType } = useSearchStore();

  const isReturn = type === 'return';
  const currentDate = isReturn ? returnDate : departureDate;

  // If return type but trip is one-way, it shouldn't render, but we handle this in SearchBar.

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (isReturn) {
      setDates(departureDate, val);
    } else {
      setDates(val, returnDate);
    }
  };

  const handleClear = () => {
    if (isReturn) {
      setDates(departureDate, null);
    } else {
      setDates(null, returnDate);
    }
  };

  // Simple min dates
  const today = format(new Date(), 'yyyy-MM-dd');
  const minDate = isReturn && departureDate ? departureDate : today;

  return (
    <div className={twMerge(
      clsx(
        "flex items-center bg-white dark:bg-background-dark rounded-lg px-4 py-3 border focus-within:ring-2 focus-within:ring-primary transition-all flex-1 w-full relative",
        error ? "border-red-500" : "border-gray-200 dark:border-gray-700"
      )
    )}>
      <Calendar className="w-5 h-5 text-gray-400 mr-3" />
      
      <div className="flex-1 flex items-center justify-between">
        <div className="flex flex-col flex-1">
          <span className="text-xs text-textSecondary-light dark:text-textSecondary-dark mb-0.5">
            {isReturn ? 'Return' : 'Departure'}
          </span>
          <input
            type="date"
            min={minDate}
            value={currentDate || ''}
            onChange={handleChange}
            className="bg-transparent border-none outline-none text-textPrimary-light dark:text-textPrimary-dark text-sm w-full cursor-pointer focus:ring-0 p-0 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
          />
        </div>
        
        {currentDate && (
          <button 
            onClick={handleClear}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full z-10"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        )}
      </div>
      
      {/* Visual overlay for selected date */}
      {currentDate && (
        <div className="absolute inset-0 pointer-events-none flex items-center px-4">
          <Calendar className="w-5 h-5 text-transparent mr-3" />
          <div className="flex flex-col bg-white dark:bg-background-dark pt-4 pr-6 w-full">
            <span className="text-sm font-bold text-textPrimary-light dark:text-textPrimary-dark">
              {format(parseISO(currentDate), 'EEE, MMM d, yyyy')}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
