'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColumnMoTaSanPhamSchema extends Schema {
  up () {
    this.alter('san_phams', (table) => {
      table.string('mo_ta')
    })
  }

  down () {
    this.drop('san_phams')
  }
}

module.exports = AddColumnMoTaSanPhamSchema
