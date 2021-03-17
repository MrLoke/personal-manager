import styled from 'styled-components/macro'

export const BalanceContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BalanceHeader = styled.h3`
  color: ${({ theme }) => theme.colors.light};
  text-transform: uppercase;
`

export const TotalAmount = styled.h2`
  color: ${({ theme }) => theme.colors.light};
  padding-top: .5rem;
`