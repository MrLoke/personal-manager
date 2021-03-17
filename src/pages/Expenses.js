import Balance from "components/Expense/Balance/Balance"
import IncomeExpenses from "components/Expense/IncomeExpenses/IncomeExpenses"
import TransactionHistory from "components/Expense/TransactionHistory/TransactionHistory"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTransaction } from 'features/expensesSlice'
import { useSelect } from 'downshift'
import useDate from 'hooks/useDate'
import Form from 'components/Form/Form'
import Input from 'components/Input/Input'
import AddButton from 'components/AddButton/AddButton'
import Sidebar from "components/Sidebar/Sidebar"
import SelectOptions from 'components/SelectOptions/SelectOptions'
import styled from 'styled-components/macro'

const ExpensesWrapper = styled.div`
  display: flex;
`

const ExpensesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${({ theme }) => theme.media.sm} {
    width: 90%;
  }
`

const AddItemContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  &:last-child {
    margin-bottom: 0rem;
  }
`

const items = ['PLN', 'EUR', 'USD', 'GBP']

const Expense = () => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch()
  const { fullDate } = useDate()
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    reset,
  } = useSelect({ items })

  const handleChangeDescription = (e) => setDescription(e.target.value)
  const handleChangeAmount = (e) => setAmount(e.target.value)

  const handleAddNewTransaction = (e) => {
    e.preventDefault()
    if (description.length === 0 && amount === 0.0) return

    dispatch(
      addTransaction({
        desc: description,
        amount: +amount,
        currency: selectedItem,
        date: fullDate,
      })
    )

    reset()
    setDescription('')
    setAmount(0)
  }

  return (
    <ExpensesWrapper>
      <Sidebar />
      <ExpensesContainer>
        <Form formTitle='Add new transaction' handleAddItem={handleAddNewTransaction}>
          <AddItemContainer>
            <Input
              type='text'
              placeholder='Add description'
              value={description}
              handleItemChange={handleChangeDescription}
            />
            <Input
              type='number'
              placeholder='Enter amount'
              value={amount}
              handleItemChange={handleChangeAmount}
              smallWidth='50%'
            />
          </AddItemContainer>
          <AddItemContainer>
            <SelectOptions
              items={items}
              btnText='Currency'
              isOpen={isOpen}
              selectedItem={selectedItem}
              getToggleButtonProps={getToggleButtonProps}
              getMenuProps={getMenuProps}
              highlightedIndex={highlightedIndex}
              getItemProps={getItemProps}
            />
            <AddButton>Add</AddButton>
          </AddItemContainer>
        </Form>
        <Balance />
        <IncomeExpenses />
        <TransactionHistory />
      </ExpensesContainer>
    </ExpensesWrapper>
  )
}

export default Expense
