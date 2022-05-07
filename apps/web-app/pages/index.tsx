import { useState } from 'react';
import CsvDropzone from '../components/csv-dropzone/csv-dropzone';
import { CakeDeFiTransaction } from '../models/cake-transaction.model';

export function Index() {
  const [transactions, setTransactions] = useState<CakeDeFiTransaction[]>([]);

  return (
    <>
      <CsvDropzone transactionParsed={setTransactions} />
    </>
  );
}

export default Index;
