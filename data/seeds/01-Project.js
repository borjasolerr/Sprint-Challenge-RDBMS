exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts new seed entries
      return knex('projects').insert([
        {
          project_id: 1,
          project_name: 'PostgreSQL',
          project_description: 'Install and learn how to use Postgres',
          project_completed: false
        },
        {
          project_id: 2,
          project_name: 'Solidity',
          project_description: 'Create a proper smart contract',
          project_completed: false
        },
        {
          project_id: 3,
          project_name: 'Data Persistance Sprint Challenge',
          project_description: 'Finish MVP and Stretch goals for sprint challenge',
          project_completed: false
        }
      ]);
    });
};
