import styled from 'styled-components/macro'

export const AddBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.utils.smallRadius};
  padding: 1rem 2rem;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.size.s};
  color: ${({ theme }) => theme.colors.light};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`