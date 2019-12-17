/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Switch, Route } from 'react-router-dom'
import Home from 'routes/Home'
import About from 'routes/About'
import AppProvider from 'components/AppProvider'
import Navigation from 'components/Navigation'

export default function App(): JSX.Element {
  return (
    <AppProvider>
      <Navigation />

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </AppProvider>
  )
}
