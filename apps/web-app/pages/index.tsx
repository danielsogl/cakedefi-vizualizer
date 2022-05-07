import { Accordion } from '@mantine/core';
import { useState } from 'react';
import CsvDropzone from '../components/csv-dropzone/csv-dropzone';
import { CakeDeFiTransaction } from '../models/cake-transaction.model';

export function Index() {
  const [transactions, setTransactions] =
    useState<CakeDeFiTransaction[]>(undefined);

  return (
    <>
      <Accordion multiple initialItem={0}>
        <Accordion.Item label="Transactions CSV">
          <CsvDropzone transactionParsed={setTransactions} />
        </Accordion.Item>
        <Accordion.Item label="Transactions"></Accordion.Item>
        <Accordion.Item label="Transactions Evaluation"></Accordion.Item>
      </Accordion>
    </>
  );
}

export default Index;
