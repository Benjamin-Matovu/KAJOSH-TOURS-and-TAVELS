'use client';

import React from 'react';
import { useSearchStore } from '../../store/searchStore';
import { TripType } from '../../lib/types';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function TripTypeToggle() {
  const { tripType, setTripType } = useSearchStore();

  const types: { value: TripType; label: string }[] = [
    { value: 'one-way', label: 'One-way' },
    { value: 'return', label: 'Return' },
    { value: 'multi-city', label: 'Multi-city' },
  ];

  return (
    <div className="flex space-x-1 bg-white/20 dark:bg-black/20 p-1 rounded-full w-fit backdrop-blur-sm mb-4">
      {types.map((type) => (
        <button
          key={type.value}
          onClick={() => setTripType(type.value)}
          className={twMerge(
            clsx(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              tripType === type.value
                ? 'bg-primary text-white shadow-md'
                : 'text-textSecondary-light dark:text-textSecondary-dark hover:bg-white/30 dark:hover:bg-black/30 hover:text-textPrimary-light dark:hover:text-textPrimary-dark'
            )
          )}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
}
