const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);
const routes = express.Router();

// addProject = [POST] => returns an array with project_id
routes.post('/', async (req, res) => {
  const reqBody = req.body;
  if (reqBody.project_name) {
    try {
      const addNewProject = await db('projects').insert({ project_completed: false, ...reqBody }); // default setting for project_completed status = false
      res.status(201).json(addNewProject);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(400).json({ message: `Please provide project_name.` });
  }
});

routes.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const getAll = await db
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

    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = routes;
