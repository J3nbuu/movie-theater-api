const express = require('express')
// const app = express()
const app = require('./app'); //
const port = 3000;

//TODO: Create your GET Request Route Below: 

app.get("/", (req, res) => {1
    res.send ("Hello World");
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})