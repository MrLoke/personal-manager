import styled from 'styled-components/macro'

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const FormTitle = styled.h2`
  padding-bottom: 2rem;
  font-size: ${({ theme }) => theme.size.m};
  color: ${({ theme }) => theme.colors.light};
`

export const AddItemForm = styled.form`
  margin: 3rem 0;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.utils.smallRadius};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  ${({ theme }) => theme.media.md} {
    padding: 2rem;
  }
`
