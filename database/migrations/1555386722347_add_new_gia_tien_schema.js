'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddNewGiaTienSchema extends Schema {
  up () {
    this.alter('san_phams', (table) => {
      // alter table
      table.decimal('gia_tien', 15, 2);
    })
  }

  down () {
    this.drop('san_phams')
  }
}

module.exports = AddNewGiaTienSchema
