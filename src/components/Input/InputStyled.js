import styled from 'styled-components/macro'

export const AddItemInput = styled.input`
  padding: 1rem 2rem;
  margin-right: 1rem;
  height: 4rem;
  border-radius: ${({ theme }) => theme.utils.mediumRadius};
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.size.s};
  width: ${({ smallWidth }) => smallWidth ? '25%' : null};
`

export const Textarea = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  padding: 1rem;
  margin: 2rem 0;
  font-size: ${({ theme }) => theme.size.s};
  border-radius: ${({ theme }) => theme.utils.smallRadius};
`