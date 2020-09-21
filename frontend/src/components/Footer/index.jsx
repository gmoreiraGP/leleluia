import React from 'react'

import { Footer as FooterComponent } from './styles'

const date = new Date()
const year = date.getFullYear()

const Footer = () => {
  return (
    <FooterComponent>
      <p>
        <span>{year} &copy;</span>
        Todos os direitos reservados à <span>Leleluia Transportes</span>
      </p>
    </FooterComponent>
  )
}

export default Footer
