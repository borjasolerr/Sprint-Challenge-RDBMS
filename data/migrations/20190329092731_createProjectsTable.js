exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments('project_id');

    table
      .string('project_name', 256)
      .notNullable()
      .unique();

    table.text('project_description');

    table.boolean('project_completed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
