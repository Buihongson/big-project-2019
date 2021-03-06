'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class NhaSanXuat extends Model {
    san_phams () {
        return this.hasMany('App/Models/SanPham')
    }
}

module.exports = NhaSanXuat
