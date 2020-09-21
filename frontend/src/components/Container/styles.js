import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-areas:
    'header header header' 'main main main'
    'footer footer footer';
  align-items: center;
  justify-content: center;
  height: 100vh;
`
