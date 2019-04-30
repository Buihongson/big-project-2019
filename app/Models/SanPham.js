'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SanPham extends Model {
    nha_san_xuats () {
        return this.belongsTo('App/Models/NhaSanXuat')
    }
}

module.exports = SanPham
