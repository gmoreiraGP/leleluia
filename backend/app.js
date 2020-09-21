const customExpress = require('./src/config/custom-express')

require('dotenv').config()

const app = customExpress

const port = process.env.PORT
const host = () => console.log(`🚀 App is running on http://localhost:${port}`)

app.listen(port, host)
