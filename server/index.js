const express = require('express')
require("dotenv").config()
const cors = require('cors')
const sequelize = require("./config/db")


const blogRouter = require('./routes/blog')
const PORT = process.env.PORT || 8001;

const app = express();

app.use(cors())
app.use(express.json())

app.use('/posts',blogRouter)

sequelize.sync()

app.listen(PORT,() =>{
    console.log(`server started on port ${PORT}`)
})