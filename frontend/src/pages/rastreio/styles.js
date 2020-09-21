import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'box box';
  grid-template-rows: repeat(1, 1fr);
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  grid-area: wrapper;
  border: none;
  border-radius: 20px;
  position: relative;

  img {
    border-radius: 20px;
    width: 100%;
    max-width: 1200px;
  }
`
export const Image = styled.div`
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.4;
  }
`

export const Box = styled.div`
  width: 600px;
  height: 300px;
  max-height: 100%;
  grid-area: box;
  max-width: 1200px;
  padding: 20px;

  background: ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.background};

  border: none;
  border-radius: 20px;

  display: grid;
  grid-template-areas: 'typography' 'form';
  grid-template-rows: repeat(2, 1fr);
`
export const Typography = styled.div`
  grid-area: typography;
  text-align: center;
  align-self: center;
  padding: 5px;

  h1 {
    margin: 0 0 10px 0;
  }
`

export const Form = styled.div`
  grid-area: form;
  align-self: center;
  width: 100%;
  height: 100%;
  justify-self: center;
  padding: 10px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input,
    button {
      margin: 5px;
    }

    input {
      width: calc(100% - 4px);
      background: transparent;
      border: none;
      border-bottom: 2px solid ${props => props.theme.colors.primary};
      padding: 5px;

      ::placeholder {
        text-align: center;
      }
    }

    button {
      width: 100%;
      background: ${props => props.theme.colors.primary};
      border: 4px solid ${props => props.theme.colors.primary};
      border-radius: 10px;
      padding: 10px;
      color: ${props => props.theme.colors.text};
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 2px;

      :hover {
        background: ${props => props.theme.colors.background};
        border: 4px solid ${props => props.theme.colors.background};
      }
    }
  }
`
