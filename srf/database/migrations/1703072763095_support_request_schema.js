'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SupportRequestSchema extends Schema {
  up () {
    this.create('support_requests', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('support_requests')
  }
}

module.exports = SupportRequestSchema
