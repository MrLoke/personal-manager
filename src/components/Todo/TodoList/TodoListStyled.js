import styled from 'styled-components/macro'

export const TodoListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  ${({ theme }) => theme.media.sm} {
    /* width: 90%; */
  }
`

export const ListTasks = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  &:last-child {
    margin-bottom: 6rem;
  }

  ${({ theme }) => theme.media.sm} {
    &:last-child {
      margin-bottom: 2rem;
    }
  }
`
