import currency from 'currency.js';

export function formatPrice(amount: number, currencyCode: string): string {
  // Simple implementation, normally you'd use the symbol from currencies constant
  return currency(amount, { symbol: currencyCode + ' ', precision: 2 }).format();
}
