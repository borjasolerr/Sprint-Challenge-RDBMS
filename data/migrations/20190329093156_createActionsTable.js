exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments('action_id');

    table
      .string('action_name', 256)
      .notNullable()
      .unique();

    table.text('action_note');

    table.boolean('action_completed');

    table
      .integer('project_id')
      .unsigned()
      .references('project_id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
