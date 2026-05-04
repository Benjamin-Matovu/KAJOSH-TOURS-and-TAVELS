import React from 'react';
import { Flight } from '../../../lib/types';
import { format, parseISO } from 'date-fns';
import { Clock, Briefcase, ChevronRight, Plane } from 'lucide-react';

interface Props {
  flight: Flight;
}

export function FlightCard({ flight }: Props) {
  const firstSegment = flight.segments[0];
  const lastSegment = flight.segments[flight.segments.length - 1];

  const depTime = parseISO(firstSegment.departureTime);
  const arrTime = parseISO(lastSegment.arrivalTime);

  const formatDuration = (mins: number) => {
    const hours = Math.floor(mins / 60);
    const m = mins % 60;
    return `${hours}h ${m}m`;
  };

  return (
    <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Airline Info */}
        <div className="flex items-center gap-4 md:w-1/4">
          <div className="w-10 h-10 bg-gray-50 dark:bg-gray-800 rounded flex items-center justify-center">
            {/* Airline logo placeholder */}
            <span className="font-bold text-primary text-xs">{flight.airline.substring(0, 2).toUpperCase()}</span>
          </div>
          <div>
            <div className="font-bold text-textPrimary-light dark:text-textPrimary-dark text-sm">{flight.airline}</div>
            <div className="text-xs text-textSecondary-light dark:text-textSecondary-dark">
              {flight.cabinClass.charAt(0).toUpperCase() + flight.cabinClass.slice(1)}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex-1 flex items-center justify-between px-2 md:px-6 relative">
          {/* Departure */}
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-textPrimary-light dark:text-textPrimary-dark">
              {format(depTime, 'HH:mm')}
            </span>
            <span className="text-sm text-textSecondary-light dark:text-textSecondary-dark font-medium">
              {flight.origin}
            </span>
          </div>

          {/* Line & Stops */}
          <div className="flex-1 flex flex-col items-center px-4 relative group">
            <span className="text-xs text-textSecondary-light dark:text-textSecondary-dark mb-1 font-medium">
              {formatDuration(flight.totalDurationMinutes)}
            </span>
            <div className="w-full h-[2px] bg-gray-200 dark:bg-gray-700 relative flex items-center justify-between">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
              {flight.layovers.map((layover, idx) => (
                <div key={idx} className="relative cursor-help">
                  <div className="w-2 h-2 rounded-full bg-primary border border-white dark:border-black z-10"></div>
                  {/* Tooltip for layover */}
                  <div className="absolute hidden group-hover:block bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {layover.airport} • {formatDuration(layover.durationMinutes)} layover
                  </div>
                </div>
              ))}
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
            </div>
            <span className="text-xs text-primary mt-1 font-medium">
              {flight.stops === 0 ? 'Direct' : `${flight.stops} Stop${flight.stops > 1 ? 's' : ''}`}
            </span>
          </div>

          {/* Arrival */}
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-textPrimary-light dark:text-textPrimary-dark">
              {format(arrTime, 'HH:mm')}
            </span>
            <span className="text-sm text-textSecondary-light dark:text-textSecondary-dark font-medium">
              {flight.destination}
            </span>
            {depTime.getDate() !== arrTime.getDate() && (
              <span className="text-[10px] text-red-500 absolute -right-2 top-0">+1</span>
            )}
          </div>
        </div>

        {/* Price & Action */}
        <div className="flex flex-row md:flex-col items-center justify-between md:w-1/4 border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-800 pt-4 md:pt-0 md:pl-6">
          <div className="flex flex-col md:items-end">
            <span className="text-2xl font-black text-textPrimary-light dark:text-textPrimary-dark">
              ${flight.price.amount}
            </span>
            <span className="text-xs text-textSecondary-light dark:text-textSecondary-dark">
              total per adult
            </span>
          </div>
          
          <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg font-bold flex items-center justify-center transition-colors shadow-md">
            Select
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
      
      {/* Baggage preview */}
      <div className="mt-4 pt-3 border-t border-gray-50 dark:border-gray-800/50 flex items-center gap-4 text-xs text-textSecondary-light dark:text-textSecondary-dark">
        <div className="flex items-center gap-1">
          <Briefcase className="w-3 h-3" />
          <span>Cabin bag included</span>
        </div>
        {flight.baggagePolicy.checkedBag.included && (
          <div className="flex items-center gap-1">
            <Briefcase className="w-3 h-3" />
            <span>Checked bag ({flight.baggagePolicy.checkedBag.weight}kg) included</span>
          </div>
        )}
      </div>
    </div>
  );
}
