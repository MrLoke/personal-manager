import Sidebar from 'components/Sidebar/Sidebar'
import styled from 'styled-components/macro'

const StatsWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 60px);
`

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.light};
  ${({ theme }) => theme.media.sm} {
    width: 90%;
  }
`
const Stats = () => {
  return (
    <StatsWrapper>
      <Sidebar />
      <StatsContainer>
        <h1>In progress...</h1>
      </StatsContainer>
    </StatsWrapper>
  )
}

export default Stats
