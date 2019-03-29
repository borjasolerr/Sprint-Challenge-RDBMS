const express = require('express');
const helmet = require('helmet');
const routes_projects = require('./routes_projects');
const routes_actions = require('./routes_actions');

const app = express();
const projects_url = '/projects';
const actions_url = '/actions';

app.use(express.json());
app.use(helmet());

app.use(projects_url, routes_projects);
app.use(actions_url, routes_actions);

app.get('/', (req, res) => {
  res.status(200).json('Hello from GET main request');
});

module.exports = app;
