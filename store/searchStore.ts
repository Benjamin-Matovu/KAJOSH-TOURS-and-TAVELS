import { create } from 'zustand';
import { Airport, TripType, CabinClass, PassengerCount } from '../lib/types';

interface SearchState {
  origin: Airport | null;
  destination: Airport | null;
  departureDate: string | null;
  returnDate: string | null;
  tripType: TripType;
  cabinClass: CabinClass;
  passengers: PassengerCount;
  currency: string;
  darkMode: boolean;
  user: { id: string; name: string; email: string } | null;
  priceAlerts: any[]; // type as any for now
  
  setOrigin: (airport: Airport | null) => void;
  setDestination: (airport: Airport | null) => void;
  setDates: (departure: string | null, returnD: string | null) => void;
  setTripType: (type: TripType) => void;
  setCabinClass: (cls: CabinClass) => void;
  setPassengers: (pax: PassengerCount) => void;
  setCurrency: (currency: string) => void;
  toggleDarkMode: () => void;
  setUser: (user: any) => void;
  addAlert: (alert: any) => void;
  removeAlert: (id: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  origin: null,
  destination: null,
  departureDate: null,
  returnDate: null,
  tripType: 'one-way',
  cabinClass: 'economy',
  passengers: { adults: 1, children: 0, infants: 0 },
  currency: 'USD',
  darkMode: false,
  user: null,
  priceAlerts: [],

  setOrigin: (airport) => set({ origin: airport }),
  setDestination: (airport) => set({ destination: airport }),
  setDates: (departure, returnD) => set({ departureDate: departure, returnDate: returnD }),
  setTripType: (type) => set({ tripType: type }),
  setCabinClass: (cls) => set({ cabinClass: cls }),
  setPassengers: (pax) => set({ passengers: pax }),
  setCurrency: (currency) => set({ currency }),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  setUser: (user) => set({ user }),
  addAlert: (alert) => set((state) => ({ priceAlerts: [...state.priceAlerts, alert] })),
  removeAlert: (id) => set((state) => ({ priceAlerts: state.priceAlerts.filter(a => a.id !== id) })),
}));
