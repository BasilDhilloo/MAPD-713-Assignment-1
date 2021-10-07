const express = require('express');
const dotenv = require('dotenv')

const app = express();


// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

// app.get('/employees', (req, res) => {
//     res.send('Employess')
// })

const connectDB = require('./config/db')

dotenv.config({path: "./config/config.env"})

connectDB();

app.listen(5000);
