/*
    npm init
    npm install express --save
    npm install -D nodemon
*/
const express = require('express');
const app = express();

const port = 3001;

const satelliteRouters = require('./routes/satellite');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(satelliteRouters);


app.listen(port, () => {
    console.log("El servidor esta inicializado en el puerto 3001");
}); 