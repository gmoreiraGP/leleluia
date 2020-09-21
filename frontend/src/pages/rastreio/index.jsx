import React from 'react'
import Head from 'next/head'
import { Formik, Field, Form as FormFormik } from 'formik'

import { Main } from '../../components/Main/styles'
import { Container, Image, Box, Typography, Form } from './styles'

const Rastreio = () => {
  return (
    <Main>
      <Image background="/boxes.png" />
      <Head>
        <title>RASTREIO | Leleluia Transportes</title>
      </Head>
      <Container>
        <Box>
          <Typography>
            <h1>Rastreio</h1>
            <p>Digite o número da sua nota fiscal</p>
          </Typography>
          <Form>
            <Formik
              initialValues={{
                nFiscal: ''
              }}
              onSubmit={async values => {
                await new Promise(r => setTimeout(r, 500))
                alert(JSON.stringify(values, null, 2))
              }}
            >
              <FormFormik>
                <Field
                  id="nFiscal"
                  type="number"
                  name="nFiscal"
                  placeholder="123456789..."
                />

                <button type="submit">Procurar</button>
              </FormFormik>
            </Formik>
          </Form>
        </Box>
      </Container>
    </Main>
  )
}

export default Rastreio
