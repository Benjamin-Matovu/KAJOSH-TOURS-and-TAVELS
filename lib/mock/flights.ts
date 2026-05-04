import { Flight } from '../types';

export const flights: Flight[] = [
  // Uganda Airlines (UR)
  {
    id: 'f1',
    origin: 'EBB',
    destination: 'LHR',
    segments: [
      {
        flightNumber: 'UR404',
        airline: 'Uganda Airlines',
        departureAirport: 'EBB',
        arrivalAirport: 'LHR',
        departureTime: '2026-06-15T10:00:00Z',
        arrivalTime: '2026-06-15T18:00:00Z',
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
    airline: 'Uganda Airlines',
    bookingClass: 'Y',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-15'
  },
  {
    id: 'f2',
    origin: 'EBB',
    destination: 'DXB',
    segments: [
      {
        flightNumber: 'UR446',
        airline: 'Uganda Airlines',
        departureAirport: 'EBB',
        arrivalAirport: 'DXB',
        departureTime: '2026-06-15T22:00:00Z',
        arrivalTime: '2026-06-16T04:30:00Z',
        durationMinutes: 330,
        aircraftType: 'A330-800neo'
      }
    ],
    layovers: [],
    totalDurationMinutes: 330,
    stops: 0,
    price: { amount: 450, currency: 'USD', breakdown: { baseFare: 350, taxes: 80, fees: 20, total: 450 } },
    cabinClass: 'economy',
    seatsRemaining: 5,
    baggagePolicy: { cabinBag: { weight: 7, dimensions: '55x40x20cm' }, checkedBag: { included: true, weight: 23, fee: 0 } },
    fareConditions: { refundable: true, changeable: true, changeFee: 50 },
    airline: 'Uganda Airlines',
    bookingClass: 'Y',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-16'
  },
  // Emirates (EK)
  {
    id: 'f3',
    origin: 'EBB',
    destination: 'LHR',
    segments: [
      {
        flightNumber: 'EK730',
        airline: 'Emirates',
        departureAirport: 'EBB',
        arrivalAirport: 'DXB',
        departureTime: '2026-06-15T15:00:00Z',
        arrivalTime: '2026-06-15T21:30:00Z',
        durationMinutes: 330,
        aircraftType: 'B777-300ER'
      },
      {
        flightNumber: 'EK001',
        airline: 'Emirates',
        departureAirport: 'DXB',
        arrivalAirport: 'LHR',
        departureTime: '2026-06-16T02:00:00Z',
        arrivalTime: '2026-06-16T06:30:00Z',
        durationMinutes: 450,
        aircraftType: 'A380'
      }
    ],
    layovers: [{ airport: 'DXB', durationMinutes: 270 }],
    totalDurationMinutes: 1050,
    stops: 1,
    price: { amount: 720, currency: 'USD', breakdown: { baseFare: 550, taxes: 120, fees: 50, total: 720 } },
    cabinClass: 'economy',
    seatsRemaining: 2,
    baggagePolicy: { cabinBag: { weight: 7, dimensions: '55x38x20cm' }, checkedBag: { included: true, weight: 30, fee: 0 } },
    fareConditions: { refundable: true, changeable: true, changeFee: 100 },
    airline: 'Emirates',
    bookingClass: 'Q',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-16'
  },
  {
    id: 'f4',
    origin: 'DXB',
    destination: 'JFK',
    segments: [
      {
        flightNumber: 'EK201',
        airline: 'Emirates',
        departureAirport: 'DXB',
        arrivalAirport: 'JFK',
        departureTime: '2026-06-15T08:30:00Z',
        arrivalTime: '2026-06-15T14:30:00Z',
        durationMinutes: 840,
        aircraftType: 'A380'
      }
    ],
    layovers: [],
    totalDurationMinutes: 840,
    stops: 0,
    price: { amount: 1150, currency: 'USD', breakdown: { baseFare: 900, taxes: 200, fees: 50, total: 1150 } },
    cabinClass: 'economy',
    seatsRemaining: 15,
    baggagePolicy: { cabinBag: { weight: 7, dimensions: '55x38x20cm' }, checkedBag: { included: true, weight: 30, fee: 0 } },
    fareConditions: { refundable: true, changeable: true, changeFee: 100 },
    airline: 'Emirates',
    bookingClass: 'Q',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-15'
  },
  // Qatar Airways (QR)
  {
    id: 'f5',
    origin: 'EBB',
    destination: 'LHR',
    segments: [
      {
        flightNumber: 'QR1386',
        airline: 'Qatar Airways',
        departureAirport: 'EBB',
        arrivalAirport: 'DOH',
        departureTime: '2026-06-15T18:00:00Z',
        arrivalTime: '2026-06-15T23:30:00Z',
        durationMinutes: 330,
        aircraftType: 'B787-8'
      },
      {
        flightNumber: 'QR003',
        airline: 'Qatar Airways',
        departureAirport: 'DOH',
        arrivalAirport: 'LHR',
        departureTime: '2026-06-16T01:30:00Z',
        arrivalTime: '2026-06-16T06:30:00Z',
        durationMinutes: 420,
        aircraftType: 'A380'
      }
    ],
    layovers: [{ airport: 'DOH', durationMinutes: 120 }],
    totalDurationMinutes: 870,
    stops: 1,
    price: { amount: 680, currency: 'USD', breakdown: { baseFare: 520, taxes: 110, fees: 50, total: 680 } },
    cabinClass: 'economy',
    seatsRemaining: 4,
    baggagePolicy: { cabinBag: { weight: 7, dimensions: '50x37x25cm' }, checkedBag: { included: true, weight: 25, fee: 0 } },
    fareConditions: { refundable: true, changeable: true, changeFee: 120 },
    airline: 'Qatar Airways',
    bookingClass: 'N',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-16'
  },
  {
    id: 'f6',
    origin: 'DOH',
    destination: 'SYD',
    segments: [
      {
        flightNumber: 'QR908',
        airline: 'Qatar Airways',
        departureAirport: 'DOH',
        arrivalAirport: 'SYD',
        departureTime: '2026-06-15T20:00:00Z',
        arrivalTime: '2026-06-16T17:00:00Z',
        durationMinutes: 840,
        aircraftType: 'B777-300ER'
      }
    ],
    layovers: [],
    totalDurationMinutes: 840,
    stops: 0,
    price: { amount: 1450, currency: 'USD', breakdown: { baseFare: 1100, taxes: 300, fees: 50, total: 1450 } },
    cabinClass: 'economy',
    seatsRemaining: 8,
    baggagePolicy: { cabinBag: { weight: 7, dimensions: '50x37x25cm' }, checkedBag: { included: true, weight: 30, fee: 0 } },
    fareConditions: { refundable: true, changeable: true, changeFee: 120 },
    airline: 'Qatar Airways',
    bookingClass: 'N',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-16'
  },
  // KLM (KL)
  {
    id: 'f7',
    origin: 'EBB',
    destination: 'AMS',
    segments: [
      {
        flightNumber: 'KL535',
        airline: 'KLM',
        departureAirport: 'EBB',
        arrivalAirport: 'AMS',
        departureTime: '2026-06-15T23:50:00Z',
        arrivalTime: '2026-06-16T07:20:00Z',
        durationMinutes: 510,
        aircraftType: 'A330-200'
      }
    ],
    layovers: [],
    totalDurationMinutes: 510,
    stops: 0,
    price: { amount: 780, currency: 'USD', breakdown: { baseFare: 600, taxes: 130, fees: 50, total: 780 } },
    cabinClass: 'economy',
    seatsRemaining: 12,
    baggagePolicy: { cabinBag: { weight: 12, dimensions: '55x35x25cm' }, checkedBag: { included: true, weight: 23, fee: 0 } },
    fareConditions: { refundable: false, changeable: true, changeFee: 150 },
    airline: 'KLM',
    bookingClass: 'V',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-16'
  },
  {
    id: 'f8',
    origin: 'EBB',
    destination: 'LHR',
    segments: [
      {
        flightNumber: 'KL535',
        airline: 'KLM',
        departureAirport: 'EBB',
        arrivalAirport: 'AMS',
        departureTime: '2026-06-15T23:50:00Z',
        arrivalTime: '2026-06-16T07:20:00Z',
        durationMinutes: 510,
        aircraftType: 'A330-200'
      },
      {
        flightNumber: 'KL1007',
        airline: 'KLM',
        departureAirport: 'AMS',
        arrivalAirport: 'LHR',
        departureTime: '2026-06-16T09:00:00Z',
        arrivalTime: '2026-06-16T09:20:00Z',
        durationMinutes: 80,
        aircraftType: 'B737-800'
      }
    ],
    layovers: [{ airport: 'AMS', durationMinutes: 100 }],
    totalDurationMinutes: 690,
    stops: 1,
    price: { amount: 820, currency: 'USD', breakdown: { baseFare: 620, taxes: 150, fees: 50, total: 820 } },
    cabinClass: 'economy',
    seatsRemaining: 7,
    baggagePolicy: { cabinBag: { weight: 12, dimensions: '55x35x25cm' }, checkedBag: { included: true, weight: 23, fee: 0 } },
    fareConditions: { refundable: false, changeable: true, changeFee: 150 },
    airline: 'KLM',
    bookingClass: 'V',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-16'
  },
  // Additional Flights for diversity
  {
    id: 'f9',
    origin: 'LHR',
    destination: 'JFK',
    segments: [
      {
        flightNumber: 'BA117',
        airline: 'British Airways',
        departureAirport: 'LHR',
        arrivalAirport: 'JFK',
        departureTime: '2026-06-15T08:25:00Z',
        arrivalTime: '2026-06-15T11:15:00Z',
        durationMinutes: 470,
        aircraftType: 'B777'
      }
    ],
    layovers: [],
    totalDurationMinutes: 470,
    stops: 0,
    price: { amount: 550, currency: 'USD', breakdown: { baseFare: 400, taxes: 100, fees: 50, total: 550 } },
    cabinClass: 'economy',
    seatsRemaining: 20,
    baggagePolicy: { cabinBag: { weight: 23, dimensions: '56x45x25cm' }, checkedBag: { included: true, weight: 23, fee: 0 } },
    fareConditions: { refundable: true, changeable: true, changeFee: 50 },
    airline: 'British Airways',
    bookingClass: 'O',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-15'
  },
  {
    id: 'f10',
    origin: 'LHR',
    destination: 'JFK',
    segments: [
      {
        flightNumber: 'VS003',
        airline: 'Virgin Atlantic',
        departureAirport: 'LHR',
        arrivalAirport: 'JFK',
        departureTime: '2026-06-15T09:00:00Z',
        arrivalTime: '2026-06-15T11:50:00Z',
        durationMinutes: 470,
        aircraftType: 'A350-1000'
      }
    ],
    layovers: [],
    totalDurationMinutes: 470,
    stops: 0,
    price: { amount: 530, currency: 'USD', breakdown: { baseFare: 380, taxes: 100, fees: 50, total: 530 } },
    cabinClass: 'economy',
    seatsRemaining: 14,
    baggagePolicy: { cabinBag: { weight: 10, dimensions: '56x36x23cm' }, checkedBag: { included: true, weight: 23, fee: 0 } },
    fareConditions: { refundable: false, changeable: true, changeFee: 100 },
    airline: 'Virgin Atlantic',
    bookingClass: 'T',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-15'
  },
  {
    id: 'f11',
    origin: 'LHR',
    destination: 'JFK',
    segments: [
      {
        flightNumber: 'DL001',
        airline: 'Delta',
        departureAirport: 'LHR',
        arrivalAirport: 'JFK',
        departureTime: '2026-06-15T10:30:00Z',
        arrivalTime: '2026-06-15T13:25:00Z',
        durationMinutes: 475,
        aircraftType: 'A330-300'
      }
    ],
    layovers: [],
    totalDurationMinutes: 475,
    stops: 0,
    price: { amount: 490, currency: 'USD', breakdown: { baseFare: 350, taxes: 90, fees: 50, total: 490 } },
    cabinClass: 'economy',
    seatsRemaining: 5,
    baggagePolicy: { cabinBag: { weight: 10, dimensions: '56x35x23cm' }, checkedBag: { included: false, weight: 23, fee: 60 } },
    fareConditions: { refundable: false, changeable: false, changeFee: 0 },
    airline: 'Delta',
    bookingClass: 'E',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-15'
  },
  {
    id: 'f12',
    origin: 'EBB',
    destination: 'LHR',
    segments: [
      {
        flightNumber: 'ET333',
        airline: 'Ethiopian Airlines',
        departureAirport: 'EBB',
        arrivalAirport: 'ADD',
        departureTime: '2026-06-15T02:45:00Z',
        arrivalTime: '2026-06-15T04:55:00Z',
        durationMinutes: 130,
        aircraftType: 'B737-800'
      },
      {
        flightNumber: 'ET700',
        airline: 'Ethiopian Airlines',
        departureAirport: 'ADD',
        arrivalAirport: 'LHR',
        departureTime: '2026-06-15T10:00:00Z',
        arrivalTime: '2026-06-15T15:30:00Z',
        durationMinutes: 450,
        aircraftType: 'A350-900'
      }
    ],
    layovers: [{ airport: 'ADD', durationMinutes: 305 }],
    totalDurationMinutes: 885,
    stops: 1,
    price: { amount: 610, currency: 'USD', breakdown: { baseFare: 450, taxes: 110, fees: 50, total: 610 } },
    cabinClass: 'economy',
    seatsRemaining: 30,
    baggagePolicy: { cabinBag: { weight: 7, dimensions: '55x40x20cm' }, checkedBag: { included: true, weight: 46, fee: 0 } },
    fareConditions: { refundable: true, changeable: true, changeFee: 50 },
    airline: 'Ethiopian Airlines',
    bookingClass: 'O',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-15'
  },
  {
    id: 'f13',
    origin: 'EBB',
    destination: 'LHR',
    segments: [
      {
        flightNumber: 'MS836',
        airline: 'Egyptair',
        departureAirport: 'EBB',
        arrivalAirport: 'CAI',
        departureTime: '2026-06-15T05:00:00Z',
        arrivalTime: '2026-06-15T09:30:00Z',
        durationMinutes: 270,
        aircraftType: 'B737-800'
      },
      {
        flightNumber: 'MS777',
        airline: 'Egyptair',
        departureAirport: 'CAI',
        arrivalAirport: 'LHR',
        departureTime: '2026-06-15T13:30:00Z',
        arrivalTime: '2026-06-15T17:35:00Z',
        durationMinutes: 305,
        aircraftType: 'B777-300'
      }
    ],
    layovers: [{ airport: 'CAI', durationMinutes: 240 }],
    totalDurationMinutes: 815,
    stops: 1,
    price: { amount: 590, currency: 'USD', breakdown: { baseFare: 430, taxes: 110, fees: 50, total: 590 } },
    cabinClass: 'economy',
    seatsRemaining: 18,
    baggagePolicy: { cabinBag: { weight: 8, dimensions: '55x40x23cm' }, checkedBag: { included: true, weight: 46, fee: 0 } },
    fareConditions: { refundable: false, changeable: true, changeFee: 100 },
    airline: 'Egyptair',
    bookingClass: 'T',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-15'
  },
  {
    id: 'f14',
    origin: 'CDG',
    destination: 'DXB',
    segments: [
      {
        flightNumber: 'AF662',
        airline: 'Air France',
        departureAirport: 'CDG',
        arrivalAirport: 'DXB',
        departureTime: '2026-06-15T13:30:00Z',
        arrivalTime: '2026-06-15T22:15:00Z',
        durationMinutes: 345,
        aircraftType: 'A350-900'
      }
    ],
    layovers: [],
    totalDurationMinutes: 345,
    stops: 0,
    price: { amount: 750, currency: 'USD', breakdown: { baseFare: 600, taxes: 100, fees: 50, total: 750 } },
    cabinClass: 'economy',
    seatsRemaining: 8,
    baggagePolicy: { cabinBag: { weight: 12, dimensions: '55x35x25cm' }, checkedBag: { included: true, weight: 23, fee: 0 } },
    fareConditions: { refundable: true, changeable: true, changeFee: 80 },
    airline: 'Air France',
    bookingClass: 'L',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-15'
  },
  {
    id: 'f15',
    origin: 'SYD',
    destination: 'LHR',
    segments: [
      {
        flightNumber: 'QF1',
        airline: 'Qantas',
        departureAirport: 'SYD',
        arrivalAirport: 'SIN',
        departureTime: '2026-06-15T15:55:00Z',
        arrivalTime: '2026-06-15T22:15:00Z',
        durationMinutes: 500,
        aircraftType: 'A380'
      },
      {
        flightNumber: 'QF1',
        airline: 'Qantas',
        departureAirport: 'SIN',
        arrivalAirport: 'LHR',
        departureTime: '2026-06-15T23:45:00Z',
        arrivalTime: '2026-06-16T06:25:00Z',
        durationMinutes: 820,
        aircraftType: 'A380'
      }
    ],
    layovers: [{ airport: 'SIN', durationMinutes: 90 }],
    totalDurationMinutes: 1410,
    stops: 1,
    price: { amount: 1600, currency: 'USD', breakdown: { baseFare: 1200, taxes: 300, fees: 100, total: 1600 } },
    cabinClass: 'economy',
    seatsRemaining: 3,
    baggagePolicy: { cabinBag: { weight: 7, dimensions: '56x36x23cm' }, checkedBag: { included: true, weight: 30, fee: 0 } },
    fareConditions: { refundable: false, changeable: true, changeFee: 200 },
    airline: 'Qantas',
    bookingClass: 'S',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-16'
  },
  {
    id: 'f16',
    origin: 'EBB',
    destination: 'LHR',
    segments: [
      {
        flightNumber: 'KQ411',
        airline: 'Kenya Airways',
        departureAirport: 'EBB',
        arrivalAirport: 'NBO',
        departureTime: '2026-06-15T09:00:00Z',
        arrivalTime: '2026-06-15T10:15:00Z',
        durationMinutes: 75,
        aircraftType: 'E190'
      },
      {
        flightNumber: 'KQ100',
        airline: 'Kenya Airways',
        departureAirport: 'NBO',
        arrivalAirport: 'LHR',
        departureTime: '2026-06-15T12:00:00Z',
        arrivalTime: '2026-06-15T19:00:00Z',
        durationMinutes: 540,
        aircraftType: 'B787-8'
      }
    ],
    layovers: [{ airport: 'NBO', durationMinutes: 105 }],
    totalDurationMinutes: 720,
    stops: 1,
    price: { amount: 670, currency: 'USD', breakdown: { baseFare: 500, taxes: 120, fees: 50, total: 670 } },
    cabinClass: 'economy',
    seatsRemaining: 15,
    baggagePolicy: { cabinBag: { weight: 10, dimensions: '55x35x25cm' }, checkedBag: { included: true, weight: 46, fee: 0 } },
    fareConditions: { refundable: true, changeable: true, changeFee: 100 },
    airline: 'Kenya Airways',
    bookingClass: 'N',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-15'
  },
  {
    id: 'f17',
    origin: 'FRA',
    destination: 'JFK',
    segments: [
      {
        flightNumber: 'LH400',
        airline: 'Lufthansa',
        departureAirport: 'FRA',
        arrivalAirport: 'JFK',
        departureTime: '2026-06-15T10:50:00Z',
        arrivalTime: '2026-06-15T13:40:00Z',
        durationMinutes: 530,
        aircraftType: 'B747-8I'
      }
    ],
    layovers: [],
    totalDurationMinutes: 530,
    stops: 0,
    price: { amount: 680, currency: 'USD', breakdown: { baseFare: 500, taxes: 130, fees: 50, total: 680 } },
    cabinClass: 'economy',
    seatsRemaining: 22,
    baggagePolicy: { cabinBag: { weight: 8, dimensions: '55x40x23cm' }, checkedBag: { included: true, weight: 23, fee: 0 } },
    fareConditions: { refundable: false, changeable: true, changeFee: 150 },
    airline: 'Lufthansa',
    bookingClass: 'K',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-15'
  },
  {
    id: 'f18',
    origin: 'EBB',
    destination: 'LHR',
    segments: [
      {
        flightNumber: 'WB465',
        airline: 'RwandAir',
        departureAirport: 'EBB',
        arrivalAirport: 'KGL',
        departureTime: '2026-06-15T15:00:00Z',
        arrivalTime: '2026-06-15T14:50:00Z', // timezone diff
        durationMinutes: 50,
        aircraftType: 'CRJ-900'
      },
      {
        flightNumber: 'WB710',
        airline: 'RwandAir',
        departureAirport: 'KGL',
        arrivalAirport: 'LHR',
        departureTime: '2026-06-15T23:30:00Z',
        arrivalTime: '2026-06-16T06:30:00Z',
        durationMinutes: 540,
        aircraftType: 'A330-300'
      }
    ],
    layovers: [{ airport: 'KGL', durationMinutes: 520 }],
    totalDurationMinutes: 1110,
    stops: 1,
    price: { amount: 550, currency: 'USD', breakdown: { baseFare: 400, taxes: 100, fees: 50, total: 550 } },
    cabinClass: 'economy',
    seatsRemaining: 11,
    baggagePolicy: { cabinBag: { weight: 7, dimensions: '55x38x20cm' }, checkedBag: { included: true, weight: 46, fee: 0 } },
    fareConditions: { refundable: true, changeable: true, changeFee: 80 },
    airline: 'RwandAir',
    bookingClass: 'U',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-16'
  },
  {
    id: 'f19',
    origin: 'JFK',
    destination: 'LHR',
    segments: [
      {
        flightNumber: 'AA100',
        airline: 'American Airlines',
        departureAirport: 'JFK',
        arrivalAirport: 'LHR',
        departureTime: '2026-06-15T18:15:00Z',
        arrivalTime: '2026-06-16T06:20:00Z',
        durationMinutes: 425,
        aircraftType: 'B777-200'
      }
    ],
    layovers: [],
    totalDurationMinutes: 425,
    stops: 0,
    price: { amount: 510, currency: 'USD', breakdown: { baseFare: 360, taxes: 100, fees: 50, total: 510 } },
    cabinClass: 'economy',
    seatsRemaining: 9,
    baggagePolicy: { cabinBag: { weight: 10, dimensions: '56x36x23cm' }, checkedBag: { included: false, weight: 23, fee: 60 } },
    fareConditions: { refundable: false, changeable: false, changeFee: 0 },
    airline: 'American Airlines',
    bookingClass: 'O',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-16'
  },
  {
    id: 'f20',
    origin: 'EBB',
    destination: 'LHR',
    segments: [
      {
        flightNumber: 'TK612',
        airline: 'Turkish Airlines',
        departureAirport: 'EBB',
        arrivalAirport: 'IST',
        departureTime: '2026-06-15T05:00:00Z',
        arrivalTime: '2026-06-15T11:20:00Z',
        durationMinutes: 380,
        aircraftType: 'B737 MAX 8'
      },
      {
        flightNumber: 'TK1979',
        airline: 'Turkish Airlines',
        departureAirport: 'IST',
        arrivalAirport: 'LHR',
        departureTime: '2026-06-15T13:10:00Z',
        arrivalTime: '2026-06-15T15:20:00Z',
        durationMinutes: 250,
        aircraftType: 'A321neo'
      }
    ],
    layovers: [{ airport: 'IST', durationMinutes: 110 }],
    totalDurationMinutes: 740,
    stops: 1,
    price: { amount: 690, currency: 'USD', breakdown: { baseFare: 520, taxes: 120, fees: 50, total: 690 } },
    cabinClass: 'economy',
    seatsRemaining: 6,
    baggagePolicy: { cabinBag: { weight: 8, dimensions: '55x40x23cm' }, checkedBag: { included: true, weight: 30, fee: 0 } },
    fareConditions: { refundable: true, changeable: true, changeFee: 100 },
    airline: 'Turkish Airlines',
    bookingClass: 'V',
    departureDate: '2026-06-15',
    arrivalDate: '2026-06-15'
  }
];
