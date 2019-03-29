const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);
const routes = express.Router();

// addAction = [POST] => returns an array with action_id
routes.post('/', async (req, res) => {
  const reqBody = req.body;
  if (reqBody.action_name) {
    try {
      const addNewAction = await db('actions').insert(reqBody); // default setting for action_completed status = false
      res.status(201).json(addNewAction);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(400).json({ message: `Please provide action_name.` });
  }
});

// getAllActions = [GET] => returns an array of action objects
routes.get('/', async (req, res) => {
  try {
    const getAll = await db('actions');
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = routes;
