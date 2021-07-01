const routesProviders = require('express').Router()
const tableProvider = require('./TableCompany')
const Company = require('./Company')

routesProviders.get('/findAll', async (req, res) => {
  const providers = await tableProvider.findAll()
  res.status(200).json(providers)
})

routesProviders.post('/create', async (req, res) => {
  const newCompany = req.body
  const company = new Company(newCompany)
  await company.create()
    .then(() => {
      res.status(201).json(company)
    })
    .catch(err => {
      res.status(400).json(err)
    })

})

module.exports = routesProviders