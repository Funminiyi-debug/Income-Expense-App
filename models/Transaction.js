const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema( {
    text: {
        type: String,
        trim: true,
        required: [true, 'Please insert text']
    }, 
    amount: {
        type: Number,
        required: [true, 'Please insert amount']
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema) 