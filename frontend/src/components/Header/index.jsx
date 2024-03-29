import React from 'react'

import { Logo, Header as HeaderComponent } from './styles'
import Menu from '../Menu'

const Header = () => {
  return (
    <HeaderComponent>
      <Logo />
      <Menu />
    </HeaderComponent>
  )
}

export default Header
