const ModelTable = require('../routes/companies/modelTableCompany')

ModelTable.sync()
  .then(() => {
    console.log('Success creating table')
  })
  .catch(() => {
    console.log('Fail creating table')
  })