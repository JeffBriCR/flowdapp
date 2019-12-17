import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { OneOrMoreChildren } from 'types'

export default function AppProvider({ children }: OneOrMoreChildren) {
  return <BrowserRouter>{children}</BrowserRouter>
}
