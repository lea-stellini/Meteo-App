const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.get('/', (req,res) => {
    res.json('hi')
})

app.get('/news', (req,res) => {
    const options = {
        method: 'GET',
        url: 'api.openweathermap.org/data/2.5/weather',
        headers: {
            'x-rapidapi-key': '844c13f6bda60d25e077e1ba71204f9e';
        }
    }

    axios.request(options).then((response) => {
        res.json(response.data)
        
    }).catch((error) => {
        console.log(error)
    })
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))