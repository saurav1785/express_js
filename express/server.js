const express =require('express');
const routes = require('./routes/api');
const app = express();

app.get('/', (req, res) => {
    res.send({type: 'GET'})
})
app.listen(process.env.port || 3001,'127.0.0.1' , () => {
    console.log("Listening to port 3001");
});