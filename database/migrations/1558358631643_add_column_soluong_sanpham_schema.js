'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColumnSoluongSanphamSchema extends Schema {
  up () {
    this.alter('san_phams', (table) => {
      table.integer('so_luong')
    })
  }

  down () {
    this.drop('san_phams')
  }
}

module.exports = AddColumnSoluongSanphamSchema
