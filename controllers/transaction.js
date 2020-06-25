 const Transaction = require('../models/Transaction')

 exports.getTransaction = async (req, res, next) => {
    try {
        const transactions = await Transaction.find()
        res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (error) {
      return  res.status(500).json({
            success: false,
            error: `Server Error: ${error}`
        })
    }
}

exports.addTransaction = async (req, res, next) => {
    const  { text, amount } = req.body;
    try {
        const transaction = await Transaction.create(req.body)
        return res.status(200).json({
            success: true,
            data: transaction
        }) 
    } catch (error) {
        if(error.name === 'ValidationError'){
           const errToDisplay = Object.values(error.errors).map(item => item.message)
            res.status(400).json({
               success: false,
               error: errToDisplay
           })
           process.exit(1)
        }else {
            return  res.status(500).json({
                success: false,
                error: `Server Error: ${error}`
            })
        }
        // const err = Object.values(error).map(error => error.text)
        // console.log(err)
    }

   
}

exports.deleteTransaction = async ( req, res, next) => {
    const id = req.params.id

    try {
        const transaction = await Transaction.findById(id)
        if(!transaction){
            return res.status(404).json({
                success: false,
                error: 'transaction not found'
            })
        }
        await transaction.deleteOne()
        res.status(200).json({
            success: true, 
            data: transaction
        })   
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Server Error ${error.message}`
        })            
    }
   
}