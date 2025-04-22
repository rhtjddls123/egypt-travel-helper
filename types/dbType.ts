export interface ExchangeRatesDbType {
  updatedAt: string;
  KRWEGP: number;
  KRWUSD: number;
  KRWJPY: number;
  KRWEUR: number;
  KRWCNY: number;
}

export type ExchangeRatesKeyType = keyof ExchangeRatesDbType;
