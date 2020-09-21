import React from 'react'
import Head from 'next/head'

import { Main } from '../components/Main/styles'
import { Container, Box, Wrapper, Image } from './home/style'
import theme from '../styles/theme'

const Home = () => {
  return (
    <Main>
      <Head>
        <title>INÍCIO | Leleluia Transportes</title>
      </Head>
      <Container>
        <Box wrapperImage="image wrapper">
          <Wrapper>
            <h1>Leleluia</h1>
            <span>Sempre ao seu dispor</span>
            <p>
              Nossa equipe trabalha todos os dias para fornecer os melhores
              serviços aos clientes. Personalizamos nossas ofertas com base em
              necessidades específicas. Entre em contato para receber um
              orçamento inicial.
            </p>
          </Wrapper>
          <Image src="/move.png" />
        </Box>
        <Box background="/boxes.png">
          <Wrapper>
            <h2>Um pouco sobre nós</h2>
            <p>
              Desde a inauguração, estamos empenhados em oferecer um serviço de
              alta qualidade, prestando especial atenção à eficiência, mantendo
              a comunicação com nossos clientes clara e concisa. Nossa missão na
              Leleluia Transporte é simples: fornecer serviços de alta qualidade
              em tempo hábil. Nossa equipe atende às necessidades específicas de
              cada cliente para garantir a excelência.
            </p>
          </Wrapper>
        </Box>
        <Box wrapperImage="wrapper image">
          <Image src="/contact.png" />
          <Wrapper>
            <h2>Foco na satisfação</h2>
            <p>
              Uma experiência de compras completa deve possibilitar que o
              cliente possa acompanhar, receber e ser encantado.
            </p>
            <a href="mailto:xandejapk@gmail.com">Email</a>
            <a
              href="https://api.whatsapp.com/send?phone=5511947414008"
              target="_blank"
            >
              WhatsApp
            </a>
          </Wrapper>
        </Box>
      </Container>
    </Main>
  )
}

export default Home
