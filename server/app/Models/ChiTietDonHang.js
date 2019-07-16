'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ChiTietDonHang extends Model {
    don_hangs () {
        return this.belongsToMany('App/Models/DonHang')
    }

    san_phams () {
        return this.belongsToMany('App/Models/SanPham').pivotTable('chi_tiet_don_hangs')
    }
}

module.exports = ChiTietDonHang
