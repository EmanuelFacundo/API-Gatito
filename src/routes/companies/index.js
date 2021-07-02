const routesCompanies = require('express').Router()
const tableProvider = require('./TableCompany')
const Company = require('./Company')

routesCompanies.get('/findAll', async (req, res) => {
  const companies = await tableProvider.findAll()
  res.status(200).json(companies)
})

routesCompanies.post('/create', async (req, res) => {
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

routesCompanies.get('/:idCompany', async (req, res) => {

  try {
    const id = req.params.idCompany
    const company = new Company({ id })
    await company.findById()
      .then(_ => {
        res.status(200).json(company)
      })
      .catch(err => {
        res.status(400).json({
          message: err.message
        })
      })
  } catch (err) {
    res.status(400).json({
      message: err.message
    })
  }

})

routesCompanies.put('/updateCompany/:idCompany', async (req, res) => {

  try {
    const id = req.params.idCompany
    const companyData = req.body
    const company = Object.assign({}, companyData, { id })
    
    const newCompany = new Company(company)

    await newCompany.updateCompany()
      .then(_ => {
        res.status(200).json(newCompany)
      })
      .catch(err => {
        res.status(400).json({
          message: err.message
        })
      })

  } catch (err) {
    res.status(400).json({
      message: err.message
    })
  }
})

module.exports = routesCompanies