import { useSelector } from 'react-redux'
import { selectTransactions } from 'features/expensesSlice'
import { BalanceContainer, BalanceHeader, TotalAmount } from './BalanceStyled'

const Balance = () => {
  const transactions = useSelector(selectTransactions)
  // count total money
  const amounts = transactions.map((transaction) => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <BalanceContainer>
      <BalanceHeader>Your Balance</BalanceHeader>
      <TotalAmount>${total}</TotalAmount>
    </BalanceContainer>
  )
}

export default Balance