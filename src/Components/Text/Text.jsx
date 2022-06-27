import React from 'react'
import { Title } from './Text-styles'
import { PageTitleStyle } from './Text-styles'

export function Text({ children }) {
  return <Title>{children}</Title>
}

export function PageTitle({ children }) {
  return <PageTitleStyle>{children}</PageTitleStyle>
}