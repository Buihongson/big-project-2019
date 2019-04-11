'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DefineUserAgainSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      table.string('ten')
      table.string('dia_chi')
      table.string('so_dien_thoai')
      table.string('confirnmation_token')
      table.boolean('is_active').defaultTo(0)
    })
  }

  down () {
    this.drop('users', (table) => {
      table.dropColumn('username');
    })
  }
}

module.exports = DefineUserAgainSchema
