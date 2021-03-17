import styled from 'styled-components/macro'

export const TransactionItem = styled.li`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 1.5rem 1rem 1.5rem 0.5rem;
  margin: 1rem 0;
  width: 95%;
  color: ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.weight.medium};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.utils.smallRadius};
  border-right: solid 5px
    ${({ isIncome, theme }) =>
      isIncome ? theme.colors.green : theme.colors.red};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  ${({ theme }) => theme.media.md} {
    width: 80%;
  }
  ${({ theme }) => theme.media.lg} {
    width: 60%;
  }
`

export const TransactionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const TransactionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const TransactionDate = styled.p`
  padding: 1rem 0 0 3.5rem;
  font-size: ${({ theme }) => theme.size.xs};
  color: ${({ theme }) => theme.colors.secondaryShade};
`

export const DeleteBtn = styled.button`
  margin-right: 1rem;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.size.s};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`