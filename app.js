const express = require('express');
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.json());

const dotenv = require('dotenv')


// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

// app.get('/images', (req, res) => {
//     res.send('Images')
// })

const connectDB = require('./config/db')

//Routes for the application
app.use('/', require('./routes/index'))

dotenv.config({path: "./config/config.env"})


connectDB();

app.listen(5000);
