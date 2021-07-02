const model = require('./modelTableCompany')

module.exports = {
  findAll() {
    return model.findAll()
  },

  create(company) {
    return model.create(company)
  },

  async findById(id) {
    const company = await model.findOne({
      where: {
        id
      }
    })

    if (!company) throw new Error(`Couldn't found company`)

    return company.dataValues
  },

  update(id, dataForUpdate){
    return model.update(dataForUpdate, {
      where: {
        id
      }
    })
  }
}