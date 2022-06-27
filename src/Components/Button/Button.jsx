import React from 'react'
import { Content } from './Button-styles'
import { ReactComponent as ArrowRight } from '../Icons/ArrowRight.svg'
import { ReactComponent as Refresh } from '../Icons/RefreshIcon.svg'
import { ReactComponent as Check } from '../Icons/CheckIcon.svg'

export function Button({ children, color, icon, onClick, disabled, width }) {
  function iconSwitch() {
    switch (icon) {
      case 'arrow-right':
        return <ArrowRight />
      case 'check':
        return <Check />
      case 'refresh':
        return <Refresh />
      default:
        break
    }
  }

  return (
    <>
      <Content
        type="button"
        onClick={onClick}
        disabled={disabled ? true : false}
        width={width}
        color={color}
        icon={icon}
      >
        {children}
        {iconSwitch()}
      </Content>
    </>
  )
}