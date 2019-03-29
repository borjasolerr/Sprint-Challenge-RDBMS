const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

module.exports = {
  addAction,
  getAllActions,
  addProject,
  getProjectById,
  getAllProjects
};

function addAction(action) {
  return db('actions').insert(action);
}

function getAllActions() {
  return db('actions');
}

function addProject(project) {
  return db('projects').insert({ project_completed: false, ...project }); // default setting for project_completed status is false, unless stated in project object
}

function getProjectById(id) {
  return db
    .select('project_id as id', 'project_name as name', 'project_description as description', 'project_completed as completed')
    .from('projects')
    .where('project_id', id)
    .first()
    .then(project => {
      if (project.completed === 0) {
        project.completed = false;
      } else {
        project.completed = true;
      }

      return db
        .select('action_id as id', 'action_name as description', 'action_note as notes', 'action_completed as completed')
        .from('actions')
        .where('project_id', id)
        .then(actions => {
          const boolActions = actions.map(action => {
            if (action.completed === 0) {
              action.completed = false;
            } else {
              action.completed = true;
            }
            return action;
          });

          project.actions = boolActions;
          return project;
        });
    });
}

function getAllProjects() {
  return db('projects');
}
