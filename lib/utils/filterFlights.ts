import { Flight } from '../types';

export interface FilterState {
  stops: number[]; // 0 for Direct, 1 for 1 Stop, 2 for 2+ Stops
  airlines: string[];
  priceRange: [number, number]; // [min, max]
  departureTime: [number, number]; // minutes from midnight [0, 1440]
  arrivalTime: [number, number]; // minutes from midnight [0, 1440]
}

export interface SearchQueryParams {
  origin: string;
  destination: string;
  departureDate: string;
  // cabinClass, passengers etc. are used for pricing logic typically, but we just filter strictly by what we have.
}

export function filterFlights(
  flights: Flight[],
  searchParams: SearchQueryParams,
  filters: FilterState
): Flight[] {
  return flights.filter((flight) => {
    // 1. Core Search Match
    if (flight.origin !== searchParams.origin || flight.destination !== searchParams.destination) {
      return false;
    }

    if (flight.departureDate !== searchParams.departureDate) {
      return false;
    }

    // 2. Filters
    // Stops
    const stopsCategory = flight.stops >= 2 ? 2 : flight.stops;
    if (filters.stops.length > 0 && !filters.stops.includes(stopsCategory)) {
      return false;
    }

    // Airlines
    if (filters.airlines.length > 0 && !filters.airlines.includes(flight.airline)) {
      return false;
    }

    // Price
    if (flight.price.amount < filters.priceRange[0] || flight.price.amount > filters.priceRange[1]) {
      return false;
    }

    // Departure Time
    const depDate = new Date(flight.segments[0].departureTime);
    const depMinutes = depDate.getUTCHours() * 60 + depDate.getUTCMinutes();
    if (depMinutes < filters.departureTime[0] || depMinutes > filters.departureTime[1]) {
      return false;
    }

    // Arrival Time
    const arrDate = new Date(flight.segments[flight.segments.length - 1].arrivalTime);
    const arrMinutes = arrDate.getUTCHours() * 60 + arrDate.getUTCMinutes();
    if (arrMinutes < filters.arrivalTime[0] || arrMinutes > filters.arrivalTime[1]) {
      return false;
    }

    return true;
  });
}

export function sortFlights(flights: Flight[], sortType: 'cheapest' | 'fastest' | 'best'): Flight[] {
  const sorted = [...flights];
  switch (sortType) {
    case 'cheapest':
      return sorted.sort((a, b) => a.price.amount - b.price.amount);
    case 'fastest':
      return sorted.sort((a, b) => a.totalDurationMinutes - b.totalDurationMinutes);
    case 'best':
      // A simple heuristic for 'best': combination of low price and low duration
      return sorted.sort((a, b) => {
        const scoreA = a.price.amount + a.totalDurationMinutes;
        const scoreB = b.price.amount + b.totalDurationMinutes;
        return scoreA - scoreB;
      });
    default:
      return sorted;
  }
}
