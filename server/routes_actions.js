const express = require('express');
const DB = require('../data/dbQueries');

const routes = express.Router();

// addAction = [POST] => returns an array with action_id
routes.post('/', async (req, res) => {
  const reqBody = req.body;
  if (reqBody.action_name) {
    try {
      const addNewAction = await DB.addAction(reqBody);
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
    const getAll = await DB.getAllActions();
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = routes;
