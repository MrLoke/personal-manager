import Transaction from 'components/Expense/Transaction/Transaction'
import { useSelector } from 'react-redux'
import { selectTransactions } from 'features/expensesSlice'
import { TransactionList, HistoryHeader } from './TransactionHistoryStyled'

const TransactionHistory = () => {
  const transactions = useSelector(selectTransactions)

  return (
    <>
      <HistoryHeader>History</HistoryHeader>
      <TransactionList>
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <h2>No history</h2>
        )}
      </TransactionList>
    </>
  )
}

export default TransactionHistory