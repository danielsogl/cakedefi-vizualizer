export interface CakeDeFiTransactionRawColum {
  Date: Date;
  Operation: string;
  Amount: string;
  'Coin / Asset': string;
  'FIAT value': string;
  'FIAT currency': string;
  'Transaction ID': string;
  'Withdrawal address': string;
  Reference: string;
  'Related reference ID': string;
}

export interface CakeDeFiTransaction {
  date: Date;
  operation: string;
  amount: number;
  asset: string;
  fiatValue: number;
  fiatCurrency: string;
  transactionId: string;
  withdrawalAddress: string;
  reference: string;
  relatedReferenceID: string;
}
