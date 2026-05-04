import { Airport } from './airport';
import { CabinClass } from './search';


export interface Segment {
  flightNumber: string;
  airline: string;
  departureAirport: string;
  arrivalAirport: string;
  departureTime: string;
  arrivalTime: string;
  durationMinutes: number;
  aircraftType: string;
}

export interface Layover {
  airport: string;
  durationMinutes: number;
}

export interface BaggagePolicy {
  cabinBag: {
    weight: number;
    dimensions: string;
  };
  checkedBag: {
    included: boolean;
    weight: number;
    fee: number;
  };
}

export interface FareConditions {
  refundable: boolean;
  changeable: boolean;
  changeFee: number;
}

export interface PriceBreakdown {
  baseFare: number;
  taxes: number;
  fees: number;
  total: number;
}

export interface Price {
  amount: number;
  currency: string;
  breakdown: PriceBreakdown;
}

export interface Flight {
  id: string;
  origin: string;
  destination: string;
  segments: Segment[];
  layovers: Layover[];
  totalDurationMinutes: number;
  stops: number;
  price: Price;
  cabinClass: CabinClass;
  seatsRemaining: number;
  baggagePolicy: BaggagePolicy;
  fareConditions: FareConditions;
  airline: string;
  bookingClass: string;
  departureDate: string;
  arrivalDate: string;
}
