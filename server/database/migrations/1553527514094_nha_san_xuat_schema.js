'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NhaSanXuatSchema extends Schema {
  up () {
    this.create('nha_san_xuats', (table) => {
      table.increments()
      table.integer('parent_id').defaultTo(0)
      table.string('ten_th', 80)
      table.string('mo_ta_th')
      table.timestamps()
    })
  }

  down () {
    this.drop('nha_san_xuats')
  }
}

module.exports = NhaSanXuatSchema
