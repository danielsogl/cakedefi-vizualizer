import { Table } from '@mantine/core';
import { CakeDeFiTransaction } from '../../models/cake-transaction.model';
import TransactionsListItem from '../transactions-list-item/transactions-list-item';
import styles from './transactions-list.module.css';

/* eslint-disable-next-line */
export interface TransactionsListProps {
  transactions: CakeDeFiTransaction[];
}

export function TransactionsList(props: TransactionsListProps) {
  return (
    <div className={styles['container']}>
      <Table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(props.transactions)
            ? props.transactions.map((transaction, index) => (
                <TransactionsListItem transaction={transaction} key={index} />
              ))
            : undefined}
        </tbody>
      </Table>
    </div>
  );
}

export default TransactionsList;
