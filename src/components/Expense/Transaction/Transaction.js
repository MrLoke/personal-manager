import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTransaction } from 'features/expensesSlice'
import { IoClose } from 'react-icons/io5'
import {
  TransactionItem,
  TransactionDetails,
  TransactionInfo,
  DeleteBtn,
  TransactionDate,
} from './TransactionStyled'

const Transaction = ({ transaction }) => {
  const [isIncome, setIsIncome] = useState(Boolean)
  const dispatch = useDispatch()

  const sign = transaction.amount < 0 ? '-' : '+'

  useEffect(() => {
    if (transaction.amount > 0) setIsIncome(true)
  }, [transaction])

  return (
    <TransactionItem isIncome={isIncome}>
      <TransactionDetails>
        <DeleteBtn
          onClick={() => dispatch(deleteTransaction({ id: transaction.id }))}>
          <IoClose size='2.5rem' color='#fff' />
        </DeleteBtn>
        <TransactionInfo>
          <p>{transaction.desc}</p>
          <span>
            {sign}${Math.abs(transaction.amount)} {transaction.currency}
          </span>
        </TransactionInfo>
      </TransactionDetails>
      <TransactionDate>{transaction.date}</TransactionDate>
    </TransactionItem>
  )
}

export default Transaction
