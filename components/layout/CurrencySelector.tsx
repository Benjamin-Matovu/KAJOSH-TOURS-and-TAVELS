"use client";

import React, { useState } from 'react';
import { useSearchStore } from '../../store/searchStore';
import { CURRENCIES } from '../../lib/constants/currencies';
import { Dropdown } from '../ui/Dropdown';

export function CurrencySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const currencyCode = useSearchStore((state) => state.currency);
  const setCurrency = useSearchStore((state) => state.setCurrency);

  const selectedCurrency = CURRENCIES.find(c => c.code === currencyCode) || CURRENCIES[0];

  return (
    <Dropdown
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      trigger={
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 text-sm font-medium text-textPrimary-light dark:text-textPrimary-dark hover:text-primary"
        >
          {selectedCurrency.code} ({selectedCurrency.symbol})
        </button>
      }
    >
      <div className="max-h-60 overflow-y-auto">
        {CURRENCIES.map((c) => (
          <button
            key={c.code}
            onClick={() => {
              setCurrency(c.code);
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-background-light dark:hover:bg-background-dark"
          >
            {c.code} - {c.name} ({c.symbol})
          </button>
        ))}
      </div>
    </Dropdown>
  );
}
