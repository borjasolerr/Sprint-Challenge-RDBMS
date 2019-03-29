const express = require('express');
const DB = require('../data/dbQueries');

const routes = express.Router();

// addProject = [POST] => returns an array with project_id
routes.post('/', async (req, res) => {
  const reqBody = req.body;
  if (reqBody.project_name) {
    try {
      const addNewProject = await DB.addProject(req.body);
      res.status(201).json(addNewProject);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(400).json({ message: `Please provide project_name.` });
  }
});

// getAllProjects = [GET] => returns an array of projects
routes.get('/', async (req, res) => {
  try {
    const getAll = await DB.getAllProjects();
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// getProjectById = [GET] => returns an object with project and actions related to this project
routes.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const getAll = await DB.getProjectById(id);
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ error, message: `Project with ID ${id} does not exist.` });
  }
});

module.exports = routes;
