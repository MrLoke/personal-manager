import styled from 'styled-components/macro'

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-top: 1rem; */
  padding-bottom: 1rem;
  margin-right: 1rem;
  /* margin-top: -1rem; */
  ${({ theme }) => theme.media.md} {
    padding-top: 0;
  }
`

export const SelectContainer = styled.div`
  max-height: 3rem;
  z-index: 2;
`

export const SelectList = styled.ul`
  background-color: #fff;
  list-style: none;
`

export const SelectItem = styled.li`
  padding: 0.5rem;
`

export const SelectBtn = styled.button`
  border-radius: ${({ theme }) => theme.utils.smallRadius};
  border: none;
  outline: none;
  padding: 2rem 0;
  width: 8rem;
  height: 3rem;
  font-size: ${({ theme }) => theme.size.s};
  color: ${({ theme }) => theme.colors.light};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`
