'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdateColumnImgForCatelogSchema extends Schema {
  up () {
    this.alter('nha_san_xuats', (table) => {
      table.string('hinh_anh_info')
    })
  }

  down () {
    this.drop('nha_san_xuats')
  }
}

module.exports = UpdateColumnImgForCatelogSchema
