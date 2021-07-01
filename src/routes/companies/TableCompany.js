const model = require('./modelTableCompany')

module.exports = {
  findAll() {
    return model.findAll()
  },

  create(company) {
    return model.create(company)
  }

}