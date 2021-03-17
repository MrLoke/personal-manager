import styled from 'styled-components/macro'

export const TransactionList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const HistoryHeader = styled.h3`
  color: ${({ theme }) => theme.colors.light};
  padding: 2rem 0 1rem 0;
`