import { Airport } from './types';

export const MOCK_AIRPORTS: Airport[] = [
  { id: '1', iataCode: 'JFK', name: 'John F. Kennedy International', city: 'New York', country: 'United States', continent: 'North America', latitude: 40.6413, longitude: -73.7781, timezone: 'America/New_York' },
  { id: '2', iataCode: 'LHR', name: 'Heathrow', city: 'London', country: 'United Kingdom', continent: 'Europe', latitude: 51.4700, longitude: -0.4543, timezone: 'Europe/London' },
  { id: '3', iataCode: 'CDG', name: 'Charles de Gaulle', city: 'Paris', country: 'France', continent: 'Europe', latitude: 49.0097, longitude: 2.5479, timezone: 'Europe/Paris' },
  { id: '4', iataCode: 'NRT', name: 'Narita International', city: 'Tokyo', country: 'Japan', continent: 'Asia', latitude: 35.7720, longitude: 140.3929, timezone: 'Asia/Tokyo' },
  { id: '5', iataCode: 'DXB', name: 'Dubai International', city: 'Dubai', country: 'United Arab Emirates', continent: 'Asia', latitude: 25.2532, longitude: 55.3657, timezone: 'Asia/Dubai' },
  { id: '6', iataCode: 'EBB', name: 'Entebbe International', city: 'Entebbe', country: 'Uganda', continent: 'Africa', latitude: 0.0424, longitude: 32.4435, timezone: 'Africa/Kampala' },
  { id: '7', iataCode: 'SYD', name: 'Sydney Kingsford Smith', city: 'Sydney', country: 'Australia', continent: 'Oceania', latitude: -33.9399, longitude: 151.1753, timezone: 'Australia/Sydney' },
  { id: '8', iataCode: 'FRA', name: 'Frankfurt', city: 'Frankfurt', country: 'Germany', continent: 'Europe', latitude: 50.0333, longitude: 8.5706, timezone: 'Europe/Berlin' },
  { id: '9', iataCode: 'AMS', name: 'Schiphol', city: 'Amsterdam', country: 'Netherlands', continent: 'Europe', latitude: 52.3105, longitude: 4.7683, timezone: 'Europe/Amsterdam' },
  { id: '10', iataCode: 'YYZ', name: 'Pearson International', city: 'Toronto', country: 'Canada', continent: 'North America', latitude: 43.6777, longitude: -79.6248, timezone: 'America/Toronto' },
];

export const MOCK_DESTINATIONS = [
  { city: 'London', country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600&h=400', price: 450, iataCode: 'LHR' },
  { city: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1502602898657-3e907a5ea82c?auto=format&fit=crop&q=80&w=600&h=400', price: 520, iataCode: 'CDG' },
  { city: 'Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=600&h=400', price: 850, iataCode: 'NRT' },
  { city: 'Dubai', country: 'UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600&h=400', price: 610, iataCode: 'DXB' },
  { city: 'New York', country: 'USA', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=600&h=400', price: 480, iataCode: 'JFK' },
  { city: 'Sydney', country: 'Australia', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=600&h=400', price: 920, iataCode: 'SYD' },
  { city: 'Amsterdam', country: 'Netherlands', image: 'https://images.unsplash.com/photo-1517736996303-4e64a4f887fb?auto=format&fit=crop&q=80&w=600&h=400', price: 410, iataCode: 'AMS' },
  { city: 'Frankfurt', country: 'Germany', image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&q=80&w=600&h=400', price: 460, iataCode: 'FRA' },
];
