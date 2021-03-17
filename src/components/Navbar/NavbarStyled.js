import styled from 'styled-components/macro'

export const Nav = styled.nav`
  min-height: 60px;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  display: flex;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavbarHeader = styled.h2`
  color: ${({ theme }) => theme.colors.light};
`