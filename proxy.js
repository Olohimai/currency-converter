// eslint-disable-next-line no-global-assign
require = require('esm')(module);

const express = require('express')('esm');
const fetch = require('node-fetch');
const app = express();
const port = 8082;  

app.use(express.json());
 
app.get('/currencies', async (req, res) => {
    try {
        const response = await fetch('http://www.floatrates.com/daily/usd.json');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(port, () => {
    console.log(`Proxy server is running on port ${port}`);
});
