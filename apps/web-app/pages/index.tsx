import {
  Accordion,
  Center,
  Collapse,
  Paper,
  ScrollArea,
  Title,
} from '@mantine/core';
import { useState } from 'react';
import CsvDropzone from '../components/csv-dropzone/csv-dropzone';
import TransactionsList from '../components/transactions-list/transactions-list';
import { CakeDeFiTransaction } from '../models/cake-transaction.model';

export function Index() {
  const [transactions, setTransactions] =
    useState<CakeDeFiTransaction[]>(undefined);

  const [csvOpen, setCsvOpen] = useState(true);
  const [transactionsOpen, setTransactionsOpen] = useState(true);
  const [analyseOpen, setAnalyseOpen] = useState(true);

  const handleTransactionParse = (transactions: CakeDeFiTransaction[]) => {
    setTransactions(transactions);
  };

  return (
    <>
      <Paper shadow="xs" p="md" style={{ padding: 35, margin: 25 }}>
        <Title order={5} style={{ paddingBottom: 25 }}>
          Select transactions csv
        </Title>
        <Collapse
          in={csvOpen}
          transitionDuration={500}
          transitionTimingFunction="linear"
        >
          <CsvDropzone transactionParsed={handleTransactionParse} />
        </Collapse>
      </Paper>

      <Paper shadow="xs" p="md" style={{ padding: 35, margin: 25 }}>
        <Title order={5}>Transactions</Title>
        <Collapse
          in={transactionsOpen}
          transitionDuration={500}
          transitionTimingFunction="linear"
        >
          <ScrollArea style={{ height: 250 }}>
            <TransactionsList transactions={transactions} />
          </ScrollArea>
        </Collapse>
      </Paper>

      <Paper shadow="xs" p="md" style={{ padding: 35, margin: 25 }}>
        <Title order={5}>Evaluation</Title>
        <Collapse
          in={analyseOpen}
          transitionDuration={500}
          transitionTimingFunction="linear"
        >
          <p>Analyse</p>
        </Collapse>
      </Paper>
    </>
  );
}

export default Index;
