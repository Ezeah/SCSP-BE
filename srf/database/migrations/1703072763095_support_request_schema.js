'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SupportRequestSchema extends Schema {
  up () {
      this.create('support_requests', (table) => {
      table.dropTableIfExists()
      table.increments()
      table.string('user_email', 255).notNullable()
      table.foreign('user_email').references('email').inTable('users').onDelete('cascade') //users.email
      table.string('first_name', 80).notNullable()
      table.string('last_name', 80).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('support_message_title', 255).notNullable()
      table.text('support_message_text', 500).notNullable()
      table.binary('file').notNullable()
      table.timestamps()
    }) 
  }

  down () {
    this.drop('support_requests')
  }
}

module.exports = SupportRequestSchema
