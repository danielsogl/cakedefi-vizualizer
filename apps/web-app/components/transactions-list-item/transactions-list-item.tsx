import { CakeDeFiTransaction } from '../../models/cake-transaction.model';
import { isValid } from 'date-fns';
import styles from './transactions-list-item.module.scss';

/* eslint-disable-next-line */
export interface TransactionsListItemProps {
  transaction: CakeDeFiTransaction;
}

const formatDate = (date: Date) => {
  console.log(isValid(new Date(date)));

  return (
    <>
      <p>Bla</p>
      <p>Bla</p>
    </>
  );
};

export function TransactionsListItem({
  transaction,
}: TransactionsListItemProps) {
  return (
    <tr className={styles.transactionItem}>
      <td>{transaction.asset}</td>
      <td>{formatDate(transaction.date)}</td>
      <td>{transaction.operation}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
}

export default TransactionsListItem;
