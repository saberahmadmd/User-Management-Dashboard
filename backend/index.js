const express = require('express')
const cors = require('cors')
const db = require('./database.js')
const userRoutes = require('./routes/users.js')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())


app.use('/api/users', userRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})