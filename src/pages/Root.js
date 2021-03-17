import { lazy, Suspense } from 'react'
import Navbar from 'components/Navbar/Navbar'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyles'
import { theme } from 'theme/theme'

const Todos = lazy(() => import('pages/Todos'))
const Expenses = lazy(() => import('pages/Expenses'))
const Notes = lazy(() => import('pages/Notes'))
const Stats = lazy(() => import('pages/Stats'))
const NotFound = lazy(() => import('pages/NotFound'))

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LoadingSpinner />}>
        <GlobalStyle />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Todos} />
            <Route exact path='/expenses' component={Expenses} />
            <Route exact path='/notes' component={Notes} />
            <Route exact path='/stats' component={Stats} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </ThemeProvider>
  )
}

export default Root
