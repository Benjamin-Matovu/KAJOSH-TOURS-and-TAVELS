export interface PassengerCount {
  adults: number;
  children: number;
  infants: number;
}

export interface Passenger {
  id: string;
  type: 'adult' | 'child' | 'infant';
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  passportNumber?: string;
  nationality?: string;
}
