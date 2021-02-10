/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable('events', (table) => {
    table.bigIncrements('id')
    table.string('name').notNullable()
    table.string('date').notNullable()
    table.bigInteger('userId')
      .unsigned()
      .notNullable()
      .index()
      .references('users.id')
    table.integer('playlistId')
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists(tableName);
}
