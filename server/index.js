
const express = require("express");
require('dotenv').config()
const port = process.env.PORT || 3001;

const app = express();
const school_model = require('./schoolModel')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });

  app.get('/teachers', (req, res) => {
    school_model.getTeachers()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

  app.get('/classes', (req, res) => {
    school_model.getClasses()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

  app.get('/students', (req, res) => {
    school_model.getStudents()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));