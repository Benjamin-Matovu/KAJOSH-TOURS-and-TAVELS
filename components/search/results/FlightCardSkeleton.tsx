import React from 'react';

export function FlightCardSkeleton() {
  return (
    <div className="bg-white dark:bg-background-dark rounded-xl border border-gray-100 dark:border-gray-800 p-4 animate-pulse mb-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex items-center gap-4 md:w-1/4">
          <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 w-20 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="h-3 w-12 bg-gray-200 dark:bg-gray-800 rounded"></div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-between px-6">
          <div className="h-6 w-12 bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="flex-1 mx-8 h-1 bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-6 w-12 bg-gray-200 dark:bg-gray-800 rounded"></div>
        </div>

        <div className="flex flex-row md:flex-col items-center justify-between md:w-1/4 md:pl-6">
          <div className="h-8 w-20 bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>
        </div>
      </div>
    </div>
  );
}
