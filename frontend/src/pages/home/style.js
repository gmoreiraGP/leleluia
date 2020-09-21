import styled from 'styled-components'

export const Container = styled.div`
  justify-content: center;
  align-items: center;
`

export const Box = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: ${props =>
    props.wrapperImage ? `'${props.wrapperImage}'` : `'wrapper wrapper'`};
  margin-bottom: 20px;
  padding: 20px;
  justify-content: space-evenly;
  align-items: center;

  p {
    width: 300px;
    max-width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  h1,
  h2 {
    margin-bottom: 10px;
  }

  span {
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;
  }

  ${props =>
    props.background &&
    `
    text-shadow: 2px 2px 7px rgba(18,18,20,0.5);
    padding: 30px;

    p{
      width: 100%;
    }
    
    :before {
      content: '';
      background: url(${props.background});
      background-size: cover;
      opacity: 0.3;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      width: calc(100% - 30px);
      height: 100%;
      margin: 0 auto;
      border: 0;
      border-radius: 20px;
      z-index: -1;
      }
    `};
`

export const Wrapper = styled.div`
  grid-area: wrapper;
  text-align: center;
  display: grid;

  a {
    width: 100%;
    background: ${props => props.theme.colors.primary};
    border: 4px solid ${props => props.theme.colors.primary};
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    letter-spacing: 2px;

    :hover {
      background: ${props => props.theme.colors.background};
    }
  }
`

export const Image = styled.img`
  grid-area: image;
  max-width: 100%;
  width: 300px;
  border: 0;
  border-radius: 20px;
`
