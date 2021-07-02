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
    console.log(companyFound.company)
    this.company = companyFound.company
    this.email = companyFound.email
    this.category = companyFound.category
    this.createdAt = companyFound.createdAt
    this.updatedAt = companyFound.updatedAt
    this.version = companyFound.version
  }
  
}

module.exports = Company