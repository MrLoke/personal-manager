import { Link, NavLink } from 'react-router-dom'
import { RiTodoLine } from 'react-icons/ri'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { SiMicrosoftonenote } from 'react-icons/si'
import { ImStatsDots } from 'react-icons/im'
import {
  SidebarWrapper,
  NavLinksList,
  NavLinksItem,
  NavLinksItemText,
} from './SidebarStyled'

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <NavLinksList>
        <NavLinksItem>
          <Link to='/'>
            <RiTodoLine size='3rem' color='#fff' />
          </Link>
          <NavLinksItemText>
            <NavLink to='/'>Todo</NavLink>
          </NavLinksItemText>
        </NavLinksItem>
        <NavLinksItem>
          <Link to='/expenses'>
            <RiMoneyDollarCircleLine size='3rem' color='#fff' />
          </Link>
          <NavLinksItemText>
            <NavLink to='/expenses'>Expense</NavLink>
          </NavLinksItemText>
        </NavLinksItem>
        <NavLinksItem>
          <Link to='/notes'>
            <SiMicrosoftonenote size='3rem' color='#fff' />
          </Link>
          <NavLinksItemText>
            <NavLink to='/notes'>Notes</NavLink>
          </NavLinksItemText>
        </NavLinksItem>
        <NavLinksItem>
          <Link to='/stats'>
            <ImStatsDots size='2.5rem' color='#fff' />
          </Link>
          <NavLinksItemText>
            <NavLink to='/stats'>Stats</NavLink>
          </NavLinksItemText>
        </NavLinksItem>
      </NavLinksList>
    </SidebarWrapper>
  )
}

export default Sidebar
