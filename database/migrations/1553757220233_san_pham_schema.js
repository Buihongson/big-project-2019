'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SanPhamSchema extends Schema {
  up () {
    this.create('san_phams', (table) => {
      table.increments()
      table.integer('dm_id')
      table.foreign('dm_id').references('nha_san_xuats.id').onDelete('cascade')
      table.string('ten_san_pham')
      table.string('ma_san_pham')
      table.string('gioi_tinh')
      table.string('kinh')
      table.string('duong_kinh_vo')
      table.string('do_day_vo')
      table.string('ap_suat_nuoc')
      table.string('xuat_su')
      table.float('gia_tien')
      table.string('hinh_anh')
      table.string('bao_hanh')
      table.string('tinh_trang')
      table.timestamps()
    })
  }

  down () {
    this.drop('san_phams')
  }
}

module.exports = SanPhamSchema
