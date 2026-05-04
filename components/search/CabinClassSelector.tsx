'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useSearchStore } from '../../store/searchStore';
import { CabinClass } from '../../lib/types';
import { Armchair, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

const CLASSES: { value: CabinClass; label: string }[] = [
  { value: 'economy', label: 'Economy' },
  { value: 'premium-economy', label: 'Premium Economy' },
  { value: 'business', label: 'Business' },
  { value: 'first', label: 'First Class' },
];

export function CabinClassSelector() {
  const { cabinClass, setCabinClass } = useSearchStore();
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

  const selectedLabel = CLASSES.find(c => c.value === cabinClass)?.label;

  return (
    <div className="relative flex-1" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-white dark:bg-background-dark rounded-lg px-4 py-3 border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <div className="flex items-center">
          <Armchair className="w-5 h-5 text-gray-400 mr-3" />
          <div className="flex flex-col text-left">
            <span className="text-xs text-textSecondary-light dark:text-textSecondary-dark">Cabin</span>
            <span className="text-sm font-bold text-textPrimary-light dark:text-textPrimary-dark truncate max-w-[120px]">
              {selectedLabel}
            </span>
          </div>
        </div>
        <ChevronDown className={clsx("w-4 h-4 text-gray-400 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute z-50 top-full mt-2 left-0 right-0 min-w-[200px] bg-white dark:bg-background-dark rounded-lg shadow-xl border border-gray-100 dark:border-gray-800 py-2">
          {CLASSES.map((cls) => (
            <button
              key={cls.value}
              onClick={() => {
                setCabinClass(cls.value);
                setIsOpen(false);
              }}
              className={clsx(
                "w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",
                cabinClass === cls.value ? "text-primary font-bold bg-primary/5 dark:bg-primary/10" : "text-textPrimary-light dark:text-textPrimary-dark"
              )}
            >
              {cls.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
