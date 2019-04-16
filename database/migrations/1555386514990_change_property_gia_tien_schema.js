'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChangePropertyGiaTienSchema extends Schema {
  up () {
    this.alter('san_phams', (table) => {
      table.dropColumn('gia_tien');
    })
  }
  down () {
    this.drop('san_phams', (table) => {
      table.dropColumn('gia_tien');
    })
  }
}

module.exports = ChangePropertyGiaTienSchema
