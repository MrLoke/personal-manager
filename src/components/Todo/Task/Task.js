import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTodos, editTodo } from 'features/todosSlice'
import { MdDeleteForever } from 'react-icons/md'
import { TiEdit } from 'react-icons/ti'
import {
  TaskItem,
  ItemCheckbox,
  ItemWrapper,
  ItemContainer,
  TodoText,
  TodoDesc,
  BtnsContainer,
  EditTaskBtn,
  DeleteTaskBtn,
  TodoInfoContainer,
  TodoInfo,
  EditTodoContainer,
  EditTodoForm,
  EditInput,
  EditBtn,
} from './TaskStyled'

const Task = ({ todo, handleToggle, handleDelete }) => {
  const [editTodoInput, setEditTodoInput] = useState('')
  const [isEditMode, setIsEditMode] = useState(false)
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()
  const editInput = useRef(null)

  const selectedTodo =
    (todo.id && todos.find((item) => item.id === todo.id)) || null

  const handleEditInputChange = (e) => {
    setEditTodoInput(e.target.value)
  }

  const handleEdit = () => {
    if (!selectedTodo) return

    setEditTodoInput(selectedTodo.desc)
    setIsEditMode(true)
  }

  useEffect(() => {
    if (isEditMode) {
      editInput?.current?.focus()
    }
  }, [isEditMode])

  const handleUpdate = (e) => {
    e.preventDefault()

    if (!editTodoInput.length || !todo.id) {
      handleCancelUpdate()
      return
    }

    dispatch(editTodo({ id: todo.id, desc: editTodoInput }))
    setIsEditMode(false)
    setEditTodoInput('')
  }

  const handleCancelUpdate = (e) => {
    e.preventDefault()
    setIsEditMode(false)
    setEditTodoInput('')
  }

  return (
    <>
      <TaskItem>
        <ItemWrapper>
          <ItemContainer>
            <TodoText>
              <ItemCheckbox
                type='checkbox'
                id={`checkbox-${todo.desc}`}
                onChange={() => handleToggle(todo.id)}
                checked={todo.isComplete}
              />
              <TodoDesc
                isComplete={todo.isComplete}
                htmlFor={`checkbox-${todo.desc}`}>
                {todo.desc}
              </TodoDesc>
            </TodoText>
            <BtnsContainer>
              <EditTaskBtn onClick={handleEdit}>
                <TiEdit size='2.5rem' color='#fff' />
              </EditTaskBtn>
              <DeleteTaskBtn onClick={() => handleDelete(todo.id)}>
                <MdDeleteForever size='2.5rem' color='#fff' />
              </DeleteTaskBtn>
            </BtnsContainer>
          </ItemContainer>
          <TodoInfoContainer>
            <TodoInfo>{todo.category}</TodoInfo>
            <TodoInfo>{todo.date}</TodoInfo>
          </TodoInfoContainer>
        </ItemWrapper>
      </TaskItem>
      <EditTodoContainer>
        {isEditMode ? (
          <EditTodoForm onSubmit={handleUpdate}>
            <EditInput
              ref={editInput}
              onChange={handleEditInputChange}
              value={editTodoInput}
            />
            <EditBtn type='submit'>Update</EditBtn>
            <EditBtn onClick={handleCancelUpdate}>Cancel</EditBtn>
          </EditTodoForm>
        ) : null}
      </EditTodoContainer>
    </>
  )
}

export default Task
