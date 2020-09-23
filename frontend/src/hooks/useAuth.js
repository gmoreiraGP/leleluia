import { useState } from 'react'

const [auth, setAuth] = useState()

const useAuth = (req, res) => {
  setAuth = JSON.parse(localStorage.getItem('auth'))

  if (!auth) return res.status(400).send('Not authenticated')

  return auth
}

export default useAuth
