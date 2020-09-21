import styled from 'styled-components'

import LogoTruck from '../../assets/logo.svg'

export const Logo = styled(LogoTruck)`
  grid-area: logo;
  height: 80px;
  width: auto;

  .cls-1 {
    fill: ${props => (props.fill ? props.fill : props.theme.colors.text)};
  }
  .cls-2 {
    fill: ${props => (props.fill ? props.fill : props.theme.colors.primary)};
  }
`

export const Header = styled.header`
  grid-area: header;
  display: grid;
  grid-template-areas: 'logo . menu';
  justify-content: space-between;
  align-items: center;
  align-self: baseline;
  width: 100vw;
  padding: 20px;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.background};
`
