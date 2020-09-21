import React from 'react'
import Link from 'next/link'

import { Menu as MenuComponent } from './styles'

const Menu = () => {
  return (
    <MenuComponent>
      <ul>
        <li>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/rastreio">
            <a>Rastreio</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </MenuComponent>
  )
}

export default Menu
