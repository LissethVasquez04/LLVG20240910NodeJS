const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ProductRouter = require('./src/routes/ProductRouter');
const mongoose = require('./src/config/database');

require ('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/ProductLLVG', ProductRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salio mal');
});

app.listen(PORT, () =>{
    console.log('El servidor esta escuchando el puerto ${PORT}');
});