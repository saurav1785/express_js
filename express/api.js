const express = require('express');
const routes = express.Router();
routes.get('/api/avengers',(req,res) => {
    res.send({type: 'GET'})
})
routes.post('/api/avengers',(req,res) => {
    res.send({type: 'POST'})
})
routes.put('/api/avengers',(req,res) => {
    res.send({type: 'PUT'})
})
routes.delete('/api/avengers',(req,res) => {
    res.send({type: 'DELETE'})
})
module.exports= routes;