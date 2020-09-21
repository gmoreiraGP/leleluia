import styled from 'styled-components'

export const Menu = styled.nav`
  grid-area: menu;
  justify-content: space-around;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      padding: 20px;
      background: transparent;
      border: none;
      border-radius: 10px;

      :hover {
        background: ${props => props.theme.colors.primary};

        a {
          font-weight: bold;
        }
      }
      a {
        text-transform: uppercase;
        color: ${props => props.theme.colors.text};
        text-decoration: none;
      }
    }
  }
`
