'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SanPham extends Model {
    nha_san_xuats () {
        return this.belongsTo('App/Models/NhaSanXuat')
    }

    don_hangs () {
        return this.belongsToMany('App/Models/DonHang').pivotTable('chi_tiet_don_hangs')
    }

    chi_tiet_don_hangs () {
        return this.belongsToMany('App/Models/ChiTietDonHang').pivotTable('chi_tiet_don_hangs')
    }
}

module.exports = SanPham
