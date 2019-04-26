'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColumnLoaidayForSanphamSchema extends Schema {
  up () {
    this.alter('san_phams', (table) => {
      table.string('loai_day')
    })
  }

  down () {
    this.drop('san_phams')
  }
}

module.exports = AddColumnLoaidayForSanphamSchema
