import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth'

import { Main } from '../../components/Main/styles'

const Dashboard = () => {
  return useAuth && <Main>teste</Main>
}

export default Dashboard
