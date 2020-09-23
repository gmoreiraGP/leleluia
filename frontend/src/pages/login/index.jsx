import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Formik, Field, Form as FormFormik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import { Main } from '../../components/Main/styles'
import { Container, Box, Wrapper, Typography, Form } from './styles'

const Login = () => {
  const router = useRouter()
  const initialValues = () => {
    email: ''
    password: ''
  }
  const onSubmit = async values => {
    // await new Promise(r => setTimeout(r, 500))
    // alert(JSON.stringify(values, null, 2))

    await axios
      .post('http://localhost:4000/auth', values)
      .then(
        response =>
          localStorage.setItem(
            'login',
            JSON.stringify({
              auth: true,
              token: response.data.token,
              user: response.data.user
            })
          ),
        router.push('/dashboard')
      )
      .catch(err => console.log(err))
  }
  const validationSchema = Yup.object().shape({})
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
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
