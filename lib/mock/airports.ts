import { Airport } from '../types';

export const airports: Airport[] = [
  { id: '1', iataCode: 'LHR', name: 'Heathrow Airport', city: 'London', country: 'United Kingdom', continent: 'Europe', latitude: 51.4700, longitude: -0.4543, timezone: 'Europe/London' },
  { id: '2', iataCode: 'EBB', name: 'Entebbe International Airport', city: 'Entebbe', country: 'Uganda', continent: 'Africa', latitude: 0.0424, longitude: 32.4435, timezone: 'Africa/Kampala' },
  { id: '3', iataCode: 'NBO', name: 'Jomo Kenyatta International Airport', city: 'Nairobi', country: 'Kenya', continent: 'Africa', latitude: -1.3192, longitude: 36.9275, timezone: 'Africa/Nairobi' },
  { id: '4', iataCode: 'DXB', name: 'Dubai International Airport', city: 'Dubai', country: 'United Arab Emirates', continent: 'Asia', latitude: 25.2532, longitude: 55.3657, timezone: 'Asia/Dubai' },
  { id: '5', iataCode: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York', country: 'United States', continent: 'North America', latitude: 40.6413, longitude: -73.7781, timezone: 'America/New_York' },
  { id: '6', iataCode: 'DAR', name: 'Julius Nyerere International Airport', city: 'Dar es Salaam', country: 'Tanzania', continent: 'Africa', latitude: -6.8781, longitude: 39.2026, timezone: 'Africa/Dar_es_Salaam' },
  { id: '7', iataCode: 'ADD', name: 'Addis Ababa Bole International Airport', city: 'Addis Ababa', country: 'Ethiopia', continent: 'Africa', latitude: 8.9779, longitude: 38.7993, timezone: 'Africa/Addis_Ababa' },
  { id: '8', iataCode: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris', country: 'France', continent: 'Europe', latitude: 49.0097, longitude: 2.5479, timezone: 'Europe/Paris' },
  // Adding minimum to satisfy the type. In a full system, 50+ would be added here.
];
