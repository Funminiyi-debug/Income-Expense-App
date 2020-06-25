const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const compression = require('compression')
const helmet = require('helmet')
dotenv.config({ path: './config/config.env' })
const connectDB = require('./config/db')
const path = require('path')

const app = express();

const cors = require('cors');
app.use(compression())
app.use(helmet())
app.use(cors({origin: true, credentials: true}));;
app.use(express.json())
connectDB()

if(process.env.NODE_ENV === 'production' ){
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 2000

const transactions = require('./routes/transaction');

app.use('/api/v1/transaction', transactions)

app.listen(PORT, console.log(`Server connected in ${process.env.NODE_ENV} mode running on Port ${PORT}`.cyan.bold))
