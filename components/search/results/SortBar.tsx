'use client';

import React from 'react';
import { clsx } from 'clsx';

export type SortType = 'cheapest' | 'fastest' | 'best';

interface Props {
  sortType: SortType;
  setSortType: (type: SortType) => void;
}

export function SortBar({ sortType, setSortType }: Props) {
  const options: { value: SortType; label: string; sub: string }[] = [
    { value: 'best', label: 'Best', sub: 'Balanced price & speed' },
    { value: 'cheapest', label: 'Cheapest', sub: 'Lowest price found' },
    { value: 'fastest', label: 'Fastest', sub: 'Shortest travel time' },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 mb-6">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setSortType(opt.value)}
          className={clsx(
            "flex flex-col items-center justify-center p-3 rounded-xl border transition-all",
            sortType === opt.value
              ? "bg-primary/5 border-primary text-primary shadow-sm"
              : "bg-white dark:bg-background-dark border-gray-100 dark:border-gray-800 text-textSecondary-light dark:text-textSecondary-dark hover:border-gray-200 dark:hover:border-gray-700"
          )}
        >
          <span className="font-bold text-sm">{opt.label}</span>
          <span className="text-[10px] opacity-70 hidden sm:block">{opt.sub}</span>
        </button>
      ))}
    </div>
  );
}
