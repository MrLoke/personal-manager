import styled from 'styled-components/macro'

export const NoteContainer = styled.li`
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

export const NoteLink = styled.a`
  color: ${({ theme }) => theme.colors.secondaryShade};
  margin-bottom: 1rem;
`

export const NoteInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const NoteDesc = styled.p`

`

export const DeleteNotekBtn = styled.button`
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