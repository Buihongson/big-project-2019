'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DonHangSchema extends Schema {
  up () {
    this.create('don_hangs', (table) => {
      table.increments()
      table.integer('user_id')
      table.integer('tinh_trang').default(0)
      table.integer('so_luong')
      table.float('tong_tien', 10, 2)
      table.string('ghi_chu')
      table.timestamps()
    })
  }

  down () {
    this.drop('don_hangs')
  }
}

module.exports = DonHangSchema
