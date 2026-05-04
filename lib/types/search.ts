import { PassengerCount } from './passenger';

export type TripType = 'one-way' | 'return' | 'multi-city';
export type CabinClass = 'economy' | 'premium-economy' | 'business' | 'first';

export interface SearchParams {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  tripType: TripType;
  cabinClass: CabinClass;
  passengers: PassengerCount;
  currency: string;
}
