/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { BrowserRouter } from 'react-router-dom'
import { TransitProvider } from '@blockmatic/eosio-hooks'
import { transitConfig } from 'config'
import { OneOrMoreChildren } from 'types'
import theme from 'theme'

export default function AppProvider({ children }: OneOrMoreChildren) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <TransitProvider config={transitConfig}>{children}</TransitProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
