import { useSelector } from 'react-redux'
import { selectTransactions } from 'features/expensesSlice'
import {
  IncomeExpensesWrapper,
  IncomeExpensesContainer,
  Header,
  IncomeHeader,
  ExpensesHeader,
} from './IncomeExpensesStyled'

const IncomeExpenses = () => {
  const transactions = useSelector(selectTransactions)
  // display income and expense
  const amounts = transactions.map((transaction) => transaction.amount)

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2)

  return (
    <IncomeExpensesWrapper>
      <IncomeExpensesContainer>
        <Header>Income</Header>
        <IncomeHeader>{income}</IncomeHeader>
      </IncomeExpensesContainer>
      <IncomeExpensesContainer>
        <Header>Expense</Header>
        <ExpensesHeader>{expense}</ExpensesHeader>
      </IncomeExpensesContainer>
    </IncomeExpensesWrapper>
  )
}

export default IncomeExpenses
