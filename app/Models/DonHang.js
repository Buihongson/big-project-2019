'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DonHang extends Model {
  users () {
    return this.belongsTo('App/Models/User')
  }

  chi_tiet_don_hangs () {
    return this.belongsToMany('App/Models/ChiTietDonHang')
  }

  san_phams () {
    return this.belongsToMany('App/Models/SanPham').pivotTable('chi_tiet_don_hangs')
  }
}

module.exports = DonHang
