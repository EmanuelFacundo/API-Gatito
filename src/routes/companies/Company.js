const TableCompany = require('./TableCompany')

class Company {
  constructor({ id, company, email, category, createdAt, updatedAt, version }) {
    this.id = id
    this.company = company
    this.email = email
    this.category = category
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.version = version
  }

  async create() {
    const newCompany = await TableCompany.create({
      company: this.company,
      email: this.email,
      category: this.category
    })

    this.id = newCompany.id
    this.createdAt = newCompany.createdAt
    this.updatedAt = newCompany.updatedAt
    this.version = newCompany.version
  }

  async findById() {
    const companyFound = await TableCompany.findById(this.id)
    this.company = companyFound.company
    this.email = companyFound.email
    this.category = companyFound.category
    this.createdAt = companyFound.createdAt
    this.updatedAt = companyFound.updatedAt
    this.version = companyFound.version
  }

  async updateCompany() {
    await TableCompany.findById(this.id)
    const fields = ['company', 'email', 'category']
    const dataForUpdate = {}

    fields.forEach(field => {
      const value = this[field]
      
      if (typeof value === typeof '' && value.length > 0) {
        dataForUpdate[field] = value
      }
    })

    if (Object.keys(dataForUpdate).length === 0) {
      throw new Error('No data provided to update')
    }

    await TableCompany.update(this.id, dataForUpdate)
  }
}

module.exports = Company