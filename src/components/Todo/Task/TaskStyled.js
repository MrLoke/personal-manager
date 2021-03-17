import styled from 'styled-components/macro'

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  margin: 1rem 0;
  font-size: ${({ theme }) => theme.size.s};
  color: ${({ theme }) => theme.colors.light};
  width: 95%;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.utils.smallRadius};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  ${({ theme }) => theme.media.md} {
    width: 80%;
  }

  ${({ theme }) => theme.media.lg} {
    width: 60%;
  }
`

export const ItemCheckbox = styled.input`
  cursor: pointer;
`

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TodoText = styled.div`
  padding-right: 1rem;
`

export const TodoDesc = styled.label`
  font-size: ${({ theme }) => theme.size.s};
  text-decoration: ${({ isComplete }) =>
    isComplete ? 'line-through' : 'none'};
  color: ${({ isComplete, theme }) =>
    isComplete ? theme.colors.green : theme.colors.light};
  padding-left: 1rem;
`

export const BtnsContainer = styled.div`
  display: flex;
`

export const DeleteTaskBtn = styled.button`
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  border: none;
  outline: none;
  width: 3rem;
  height: 3rem;
  font-size: ${({ theme }) => theme.size.s};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const EditTaskBtn = styled(DeleteTaskBtn)``

export const TodoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.size.xs};
`

export const TodoInfo = styled.p`
  padding-top: 0.5rem;
  font-size: ${({ theme }) => theme.size.xs};
  color: ${({ theme }) => theme.colors.secondaryShade};
`

export const EditTodoContainer = styled.div`
  display: flex;
`

export const EditTodoForm = styled.form`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`

export const EditInput = styled.input`
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.utils.bigRadius};
  margin: 0 0.5rem;
`

export const EditBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.utils.mediumRadius};
  padding: 1rem;
  margin: 0 0.5rem;
`
