'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChiTietDonHangSchema extends Schema {
  up () {
    this.create('chi_tiet_don_hangs', (table) => {
      table.increments()
      table.integer('don_hang_id')
      table.integer('san_pham_id')
      table.integer('so_luong')
      table.float('tong_tien_ct', 10, 2)
      table.integer('tinh_trang').default(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('chi_tiet_don_hangs')
  }
}

module.exports = ChiTietDonHangSchema
