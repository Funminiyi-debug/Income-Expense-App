const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log(`MongoDB connected to ${connection.connection.host} successfully`.blue.bold.toUpperCase())

    } catch (error) {   
        console.log(`Database Error:  ${error.message}`.red.bold)
        process.exit(1)
    }
}

module.exports = connectDB