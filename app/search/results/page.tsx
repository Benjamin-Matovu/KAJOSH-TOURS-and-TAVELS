'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { flights as allMockFlights } from '../../../lib/mock/flights';
import { filterFlights, sortFlights, FilterState, SearchQueryParams } from '../../../lib/utils/filterFlights';
import { FilterSidebar } from '../../../components/search/results/FilterSidebar';
import { FlightCard } from '../../../components/search/results/FlightCard';
import { SortBar, SortType } from '../../../components/search/results/SortBar';
import { FlightCardSkeleton } from '../../../components/search/results/FlightCardSkeleton';
import { Search, RotateCcw } from 'lucide-react';

function SearchResultsContent() {
  const searchParams = useSearchParams();
  
  // 1. Capture Search Params from URL
  const searchCriteria: SearchQueryParams = useMemo(() => ({
    origin: searchParams.get('from') || '',
    destination: searchParams.get('to') || '',
    departureDate: searchParams.get('departure') || '',
  }), [searchParams]);

  // 2. State for Filters and Sorting
  const [filters, setFilters] = useState<FilterState>({
    stops: [],
    airlines: [],
    priceRange: [0, 3000],
    departureTime: [0, 1440],
    arrivalTime: [0, 1440],
  });
  
  const [sortType, setSortType] = useState<SortType>('best');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching delay
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [searchParams]);

  // 3. Filtering & Sorting Logic
  const filteredAndSortedFlights = useMemo(() => {
    const filtered = filterFlights(allMockFlights, searchCriteria, filters);
    return sortFlights(filtered, sortType);
  }, [searchCriteria, filters, sortType]);

  // Derive available airlines from the current search match (ignoring other filters)
  const availableAirlines = useMemo(() => {
    const baseMatch = allMockFlights.filter(f => 
      f.origin === searchCriteria.origin && 
      f.destination === searchCriteria.destination &&
      f.departureDate === searchCriteria.departureDate
    );
    return Array.from(new Set(baseMatch.map(f => f.airline))).sort();
  }, [searchCriteria]);

  const resetFilters = () => {
    setFilters({
      stops: [],
      airlines: [],
      priceRange: [0, 3000],
      departureTime: [0, 1440],
      arrivalTime: [0, 1440],
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Summary Header */}
      <div className="mb-8 p-4 bg-primary/5 rounded-2xl border border-primary/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Search className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-textPrimary-light dark:text-textPrimary-dark">
              {searchCriteria.origin} → {searchCriteria.destination}
            </h1>
            <p className="text-sm text-textSecondary-light dark:text-textSecondary-dark">
              {searchCriteria.departureDate} • {searchParams.get('adults')} Adult(s) • {searchParams.get('cabin')}
            </p>
          </div>
        </div>
        <div className="text-sm font-medium text-primary">
          {filteredAndSortedFlights.length} flights found
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar: Filters */}
        <aside className="w-full lg:w-1/4">
          <FilterSidebar 
            filters={filters} 
            setFilters={setFilters} 
            availableAirlines={availableAirlines}
          />
        </aside>

        {/* Main Content: Results */}
        <main className="flex-1">
          <SortBar sortType={sortType} setSortType={setSortType} />

          <div className="space-y-4">
            {isLoading ? (
              // Loading Skeletons
              Array.from({ length: 5 }).map((_, i) => (
                <FlightCardSkeleton key={i} />
              ))
            ) : filteredAndSortedFlights.length > 0 ? (
              // Results List
              filteredAndSortedFlights.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
              ))
            ) : (
              // Empty State
              <div className="bg-white dark:bg-background-dark rounded-2xl p-12 text-center border border-dashed border-gray-200 dark:border-gray-800">
                <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-gray-300" />
                </div>
                <h2 className="text-2xl font-bold text-textPrimary-light dark:text-textPrimary-dark mb-2">
                  No flights found
                </h2>
                <p className="text-textSecondary-light dark:text-textSecondary-dark mb-8 max-w-sm mx-auto">
                  We couldn't find any flights matching your filters. Try adjusting your search or resetting the filters.
                </p>
                <button 
                  onClick={resetFilters}
                  className="inline-flex items-center bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary-hover transition-colors"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="h-20 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-2xl mb-8"></div>
        <div className="flex gap-8">
          <div className="w-1/4 h-[600px] bg-gray-100 dark:bg-gray-800 animate-pulse rounded-2xl"></div>
          <div className="flex-1 space-y-4">
            <div className="h-14 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl"></div>
            <FlightCardSkeleton />
            <FlightCardSkeleton />
          </div>
        </div>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
}
