exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts new seed entries
      return knex('actions').insert([
        {
          action_id: 1,
          action_name: 'Install Postgres and pgAdmin',
          action_note: '',
          action_completed: false,
          project_id: 1
        },
        {
          action_id: 2,
          action_name: 'Read docs',
          action_note: 'figure out how to configure Postgres DB',
          action_completed: false,
          project_id: 1
        },
        {
          action_id: 3,
          action_name: 'Think what contract to create',
          action_note: 'Find inspiration online',
          action_completed: false,
          project_id: 2
        },
        {
          action_id: 4,
          action_name: 'Add migrations and seeds to DB',
          action_note: 'check specification in README.md file',
          action_completed: false,
          project_id: 3
        }
      ]);
    });
};
