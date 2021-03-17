import styled from 'styled-components/macro'

export const IncomeExpensesWrapper = styled.div`
  display: flex;
  padding: 1rem 2rem 2rem 2rem;
  border-radius: ${({ theme }) => theme.utils.smallRadius};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

export const IncomeExpensesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`

export const Header = styled.h3`
  color: ${({ theme }) => theme.colors.light};
  padding: 1rem 0;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.weight.medium};
`

export const IncomeHeader = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.green};
`

export const ExpensesHeader = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.red};
`
