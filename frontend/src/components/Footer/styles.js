import styled from 'styled-components'

export const Footer = styled.footer`
  grid-area: footer;
  text-align: center;
  justify-content: center;
  align-self: end;
  border-top: 2px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.background};

  p {
    margin: 10px;
  }

  span {
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 5px;
  }
`
