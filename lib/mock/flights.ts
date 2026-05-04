import { Flight } from '../types';

export const flights: Flight[] = [
  {
    id: 'f1',
    origin: 'EBB',
    destination: 'LHR',
    segments: [
      {
        flightNumber: 'UR404',
        airline: 'UR',
        departureAirport: 'EBB',
        arrivalAirport: 'LHR',
        departureTime: '2024-07-01T10:00:00Z',
        arrivalTime: '2024-07-01T18:00:00Z',
        durationMinutes: 480,
        aircraftType: 'A330-800neo'
      }
    ],
    layovers: [],
    totalDurationMinutes: 480,
    stops: 0,
    price: { amount: 650, currency: 'USD', breakdown: { baseFare: 500, taxes: 100, fees: 50, total: 650 } },
    cabinClass: 'economy',
    seatsRemaining: 9,
    baggagePolicy: { cabinBag: { weight: 7, dimensions: '55x40x20cm' }, checkedBag: { included: true, weight: 23, fee: 0 } },
    fareConditions: { refundable: false, changeable: true, changeFee: 150 },
    airline: 'UR',
    bookingClass: 'Y',
    departureDate: '2024-07-01',
    arrivalDate: '2024-07-01'
  }
];
