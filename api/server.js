const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
// const { errorHandler } = require('./middleware/errorMiddleware')
// const colors = require('colors')
const connectDB = require('./config/db')

connectDB()

const port = process.env.PORT || 5000

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
