import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import { Container } from '../components/Container/styles'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <GlobalStyle />
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
