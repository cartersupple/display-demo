const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const {json} = require('body-parser');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(json());

app.get('/photos', async (req, res)=> {
return res.send({message :'yo'});
});
const PORT = 4000;

app.listen(PORT, console.log('Its lit on port ${PORT}')); 