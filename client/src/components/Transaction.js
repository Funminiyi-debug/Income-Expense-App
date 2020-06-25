import React from 'react' 

function Transaction ({transaction, deleteTransaction}) {
    const styleTransaction = (transaction.amount < 0) ? 'minus' : 'plus';

    return (
        <li className={styleTransaction} key={ transaction._id}>
         {transaction.text} <span>{(transaction.amount < 0) ? '-' : '+'}${Math.abs(transaction.amount)}</span>
         <button 
         className="delete-btn"
         onClick={(e) => deleteTransaction(transaction._id)}
         >x</button>
        </li> 
    )
};

export default Transaction;