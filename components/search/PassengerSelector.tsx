'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useSearchStore } from '../../store/searchStore';
import { Users, Plus, Minus, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function PassengerSelector() {
  const { passengers, setPassengers } = useSearchStore();
  const [isOpen, setIsOpen] = useState(false);
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

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

  const handleUpdate = (type: 'adults' | 'children' | 'infants', increment: boolean) => {
    const newPax = { ...passengers };
    
    if (increment) {
      if (totalPassengers >= 9) return;
      if (type === 'infants' && newPax.infants >= newPax.adults) return;
      newPax[type]++;
    } else {
      if (type === 'adults' && newPax.adults <= 1) return;
      if (newPax[type] <= 0) return;
      newPax[type]--;
      
      // Validation: infants cannot exceed adults
      if (type === 'adults' && newPax.infants > newPax.adults) {
        newPax.infants = newPax.adults;
      }
    }
    
    setPassengers(newPax);
  };

  const summaryParts = [];
  if (passengers.adults > 0) summaryParts.push(`${passengers.adults} Adult${passengers.adults > 1 ? 's' : ''}`);
  if (passengers.children > 0) summaryParts.push(`${passengers.children} Child${passengers.children > 1 ? 'ren' : ''}`);
  if (passengers.infants > 0) summaryParts.push(`${passengers.infants} Infant${passengers.infants > 1 ? 's' : ''}`);

  return (
    <div className="relative flex-1" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-transparent transition-all focus:outline-none py-2"
      >
        <div className="flex items-center">
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-slate-800 dark:text-white truncate max-w-[120px]">
              {summaryParts.join(', ')}
            </span>
          </div>
        </div>
        <ChevronDown className={clsx("w-4 h-4 text-slate-400 transition-transform ml-2", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute z-50 top-full mt-2 left-0 right-0 md:min-w-[300px] bg-white dark:bg-background-dark rounded-lg shadow-xl border border-gray-100 dark:border-gray-800 p-4">
          <div className="space-y-4">
            {/* Adults */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-textPrimary-light dark:text-textPrimary-dark">Adults</div>
                <div className="text-xs text-textSecondary-light dark:text-textSecondary-dark">Age 12+</div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleUpdate('adults', false)}
                  disabled={passengers.adults <= 1}
                  className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 text-textPrimary-light dark:text-textPrimary-dark"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-4 text-center font-bold text-textPrimary-light dark:text-textPrimary-dark">{passengers.adults}</span>
                <button
                  onClick={() => handleUpdate('adults', true)}
                  disabled={totalPassengers >= 9}
                  className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 text-textPrimary-light dark:text-textPrimary-dark"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-textPrimary-light dark:text-textPrimary-dark">Children</div>
                <div className="text-xs text-textSecondary-light dark:text-textSecondary-dark">Age 2-11</div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleUpdate('children', false)}
                  disabled={passengers.children <= 0}
                  className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 text-textPrimary-light dark:text-textPrimary-dark"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-4 text-center font-bold text-textPrimary-light dark:text-textPrimary-dark">{passengers.children}</span>
                <button
                  onClick={() => handleUpdate('children', true)}
                  disabled={totalPassengers >= 9}
                  className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 text-textPrimary-light dark:text-textPrimary-dark"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Infants */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-textPrimary-light dark:text-textPrimary-dark">Infants</div>
                <div className="text-xs text-textSecondary-light dark:text-textSecondary-dark">Under 2 (on lap)</div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleUpdate('infants', false)}
                  disabled={passengers.infants <= 0}
                  className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 text-textPrimary-light dark:text-textPrimary-dark"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-4 text-center font-bold text-textPrimary-light dark:text-textPrimary-dark">{passengers.infants}</span>
                <button
                  onClick={() => handleUpdate('infants', true)}
                  disabled={totalPassengers >= 9 || passengers.infants >= passengers.adults}
                  className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 text-textPrimary-light dark:text-textPrimary-dark"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {totalPassengers >= 9 && (
              <div className="text-xs text-red-500 text-center mt-2">Maximum 9 passengers allowed.</div>
            )}
            {passengers.infants >= passengers.adults && passengers.infants > 0 && (
              <div className="text-xs text-red-500 text-center mt-2">Max 1 infant per adult.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
