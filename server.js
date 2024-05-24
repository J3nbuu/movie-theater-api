const express = require('express')
const userRoutes = require('./routes/users.js')
const showRoutes = require('./routes/shows.js')
const seed = require('./db/seed.js')

const app = express()

app.use(express.json())
app.use('/users', userRoutes)
app.use('/shows', showRoutes)

const port = 3000


app.get("/", (req, res) => {
    res.send ("Hello World");
})

app.listen(port, async() => {
  await seed()
    console.log(`Listening at http://localhost:${port} and db reseeded`);
})