import { useSelector, useDispatch } from 'react-redux'
import Task from 'components/Todo/Task/Task'
import { selectTodos, toggleTodo, removeTodo } from 'features/todosSlice'
import { TodoListContainer, ListTasks } from './TodoListStyled'

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)

  const handleToggle = (selectedTodoId) => {
    dispatch(toggleTodo({ id: selectedTodoId }))
  }

  const handleDelete = (selectedTodoId) => {
    if (!selectedTodoId) return
    dispatch(removeTodo({ id: selectedTodoId }))
  }

  return (
    <TodoListContainer>
      <ListTasks>
        {todos.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </ListTasks>
    </TodoListContainer>
  )
}

export default TodoList
