const express = require('express');
const server = express();
server.use(express.json());
const db = require('./data/dbConfig');
// what is helmet for again???


server.get('/', (req, res) => {
  db('cars')
    .then( cars => {
      res.status(200).json(cars)
    })
    .catch( err => {
      res.status(500).json({error: err})
    })
})

server.post('/', (req, res) => {
  const carData = req.body;

  db('cars').insert(carData).into('cars')
    .then( cars => {
      res.status(201).json(cars)
    })
    .catch( err => {
      res.status(500).json({error: err})
    })
})


module.exports = server;