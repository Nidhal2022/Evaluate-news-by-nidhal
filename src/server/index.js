const axios = require('axios');


var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
const bodyParser = require('body-parser')

//cors 
const cors = require('cors');
app.use(cors());
//read the input 
app.use(express.json())

//read env var
const dotenv = require('dotenv');
dotenv.config();
//use bodyparser and exp
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
   res.sendFile('dist/index.html')
   //res.sendFile(path.resolve('src/client/views/index.html'))
    //res.send("server page ")
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


const apiKey = process.env.API_KEY

app.post('/analyze', async (req, res) => {
    try {
        const url = req.body.articleUrl;
        const response = await axios.get(`https://api.meaningcloud.com/sentiment-2.1?url=${url}&apiKey=${apiKey}`);

        const { agreement,polarity, confidence  } = response.data;
        res.json({ agreement, polarity,confidence });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server Error' });
    }
});
const PORT=8000;
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on  ${PORT} port `);
});
