'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DropColumnUsernameSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      table.dropColumn('username');
    })
  }
  down () {
    this.drop('users', (table) => {
      table.dropColumn('username');
    })
  }
}

module.exports = DropColumnUsernameSchema
