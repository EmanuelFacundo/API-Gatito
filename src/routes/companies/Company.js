const TableCompany = require('./TableCompany')

class Company {
  constructor({ company, email, category }) {
    this.id = ""
    this.company = company
    this.email = email
    this.category = category
    this.createdAt = ""
    this.updatedAt = ""
    this.version = ""
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
}

module.exports = Company