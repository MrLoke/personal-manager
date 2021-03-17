import styled from 'styled-components/macro'

export const ListNotes = styled.ul`
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