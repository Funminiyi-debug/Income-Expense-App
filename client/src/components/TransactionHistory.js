import React from 'react' 
import Transaction from './Transaction'

function TransactionHistory ({transactions, deleteTransaction}) {

    return (
        <div>
            <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => <Transaction key={transaction._id} transaction={transaction} deleteTransaction={deleteTransaction} /> )}
      </ul>
        </div>
    )
};

export default TransactionHistory;