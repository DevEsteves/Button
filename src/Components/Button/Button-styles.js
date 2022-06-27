import styled from 'styled-components'

export const Content = styled.button`
  color: ${props => theme[props.color].text};
  min-width: 31rem;
  width: ${props => (props.width ? props.width : '100%')};
  height: 5.6rem;
  cursor: pointer;
  line-height: 2.4rem;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.icon ? 'space-between' : 'center')};
  padding: 1.6rem;
  background: ${props => theme[props.color].default};
  &:hover {
    background: ${props => theme[props.color].hover};
  }
  &:active {
    background: ${props => theme[props.color].pressed};
  }
  &:disabled {
    background: ${props => theme[props.color].disabled};
    color: #ffffff;
    cursor: not-allowed;
  }
`

const theme = {
    primary: {
      default: 'var(--primary)',
      text: 'var(--primary-text)',
      hover: 'var(--primary-hover)',
      disabled: 'var(--primary-disabled)',
      pressed: 'var(--primary-pressed)'
    },
    secondary: {
      default: 'var(--secondary)',
      text: 'var(--secondary-text)',
      hover: 'var(--secondary-hover)',
      disabled: 'var(--secondary-disabled)',
      pressed: 'var(--secondary-pressed)'
    }
  }
  
  Content.defaultProps = {
    color: 'primary'
  }