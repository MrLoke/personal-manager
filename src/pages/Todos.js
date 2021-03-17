import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from 'features/todosSlice'
import Form from 'components/Form/Form'
import Input from 'components/Input/Input'
import AddButton from 'components/AddButton/AddButton'
import Sidebar from 'components/Sidebar/Sidebar'
import TodoList from 'components/Todo/TodoList/TodoList'
import SelectOptions from 'components/SelectOptions/SelectOptions'
import { useSelect } from 'downshift'
import useDate from 'hooks/useDate'
import styled from 'styled-components/macro'

const TodosWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 60px);
`

const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ theme }) => theme.media.sm} {
    width: 90%;
  }
`

const AddItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.media.md} {
    flex-direction: row;
  }
`

const SelectContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  ${({ theme }) => theme.media.md} {
    margin-top: 0rem;
  }
`

const items = ['Life', 'Work', 'Sport', 'Hobbie']

const Todos = () => {
  const [newTodoInput, setNewTodoInput] = useState('')
  const [isError, setIsError] = useState(false)
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

  const handleNewInputChange = (e) => setNewTodoInput(e.target.value)

  const handleCreateNewTodo = (e) => {
    e.preventDefault()
    if (selectedItem === null) {
      setIsError('Choose category')
      return
    }

    dispatch(
      addNewTodo({
        desc: newTodoInput,
        category: selectedItem,
        date: fullDate,
      })
    )

    reset()
    setIsError(false)
    setNewTodoInput('')
  }
  return (
    <TodosWrapper>
      <Sidebar />
      <TodosContainer>
        <Form formTitle='Add new todo' handleAddItem={handleCreateNewTodo}>
          <AddItemContainer>
            <Input
              type='text'
              placeholder='Add new todo'
              value={newTodoInput}
              handleItemChange={handleNewInputChange}
            />
            <SelectContainer>
              <SelectOptions
                items={items}
                btnText='Category'
                isOpen={isOpen}
                selectedItem={selectedItem}
                getToggleButtonProps={getToggleButtonProps}
                getMenuProps={getMenuProps}
                highlightedIndex={highlightedIndex}
                getItemProps={getItemProps}
              />
              <AddButton>Add</AddButton>
              {isError ? <p>{isError}</p> : null}
            </SelectContainer>
          </AddItemContainer>
        </Form>
        <TodoList />
      </TodosContainer>
    </TodosWrapper>
  )
}

export default Todos
