import { Table } from '@mantine/core';
import { CakeDeFiTransaction } from '../../models/cake-transaction.model';
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
            <th>Fiat value</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(props.transactions)
            ? props.transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.asset}</td>
                  <td>{new Date().toDateString()}</td>
                  <td>{transaction.operation}</td>
                  <td>{transaction.amount}</td>
                  <td>
                    {transaction.fiatValue.toFixed(4)}{' '}
                    {transaction.fiatCurrency}
                  </td>
                </tr>
              ))
            : undefined}
        </tbody>
      </Table>
    </div>
  );
}

export default TransactionsList;
