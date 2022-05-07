import styles from './transactions-list-item.module.css';

/* eslint-disable-next-line */
export interface TransactionsListItemProps {}

export function TransactionsListItem(props: TransactionsListItemProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TransactionsListItem!</h1>
    </div>
  );
}

export default TransactionsListItem;
