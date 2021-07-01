const express = require('express')
const config = require('config')
const routesProviders = require('./routes/companies')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/companies', routesProviders)

app.listen(config.get('api.port'), () => {
  console.log(`Server is a live on port ${config.get('api.port')}`)
})