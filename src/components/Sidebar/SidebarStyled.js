import styled from 'styled-components/macro'

export const SidebarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  ${({ theme }) => theme.media.sm} {
    position: static;
    width: 10%;
    padding-top: 8rem;
    min-height: calc(100vh - 60px);
    flex-direction: column;
  }
`

export const NavLinksList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  ${({ theme }) => theme.media.sm} {
    flex-direction: column;
  }
`

export const NavLinksItem = styled.li`
  font-size: ${({ theme }) => theme.size.s};
  width: 100%;
  cursor: pointer;
  padding: 1.2rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.media.lg} {
    padding: 1.2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
  }
`

export const NavLinksItemText = styled.span`
  display: none;
  ${({ theme }) => theme.media.lg} {
    display: block;
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
  }
`
