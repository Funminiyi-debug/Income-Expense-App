import React, { useState } from 'react' 


function AddTransaction ({handleSubmit}) {
  const [transaction, setTransaction] = useState({
    text: '',
    amount: 0
  }) 

  const handleChange = (e) => { 
    if (e.target.value === ''){
      return
    }
    setTransaction({
      text: (e.target.name === 'text') ? e.target.value.trim() : transaction.text,
      amount: (e.target.name === 'amount') ? e.target.value : transaction.amount
    })
  }

  const handleSubmitHere = (e) => {
    e.preventDefault()
    handleSubmit(transaction)
  }


    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmitHere}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input 
                        type="text"
                        name='text' 
                        placeholder="Enter text..." 
                        onChange={handleChange}/>
                </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input 
              type="number"
              name='amount' 
              placeholder="Enter amount..."
              onChange={handleChange} />
        </div>
        <button className="btn" type="submit">Add transaction</button>
      </form>
        </div>
    )
};

export default AddTransaction;