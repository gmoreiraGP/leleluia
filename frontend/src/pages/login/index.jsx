import React from 'react'
import Head from 'next/head'

import { Formik, Field, Form as FormFormik } from 'formik'

import { Main } from '../../components/Main/styles'
import { Container, Box, Wrapper, Typography, Form } from './styles'

const Login = () => {
  return (
    <Main>
      <Head>
        <title>LOGIN | Leleluia Transportes</title>
      </Head>
      <Container>
        <Wrapper>
          <img src="/drive.png" alt="Drive" />
        </Wrapper>
        <Box>
          <Typography>
            <h1>Login</h1>
            <p>Faça seu login para continuar</p>
          </Typography>
          <Form>
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              onSubmit={async values => {
                await new Promise(r => setTimeout(r, 500))
                alert(JSON.stringify(values, null, 2))
              }}
            >
              <FormFormik>
                <Field id="email" name="email" placeholder="Email" />

                <Field
                  id="password"
                  name="password"
                  placeholder="Senha"
                  type="password"
                />
                <button type="submit">Entrar</button>
              </FormFormik>
            </Formik>
          </Form>
        </Box>
      </Container>
    </Main>
  )
}

export default Login
