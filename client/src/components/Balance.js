import React from 'react' 

function Balance ({transactions}) {
   
     const calcTotal = transactions.reduce((total, num) => total + num, 0)
    return (
        <div className='balance' >
            <h4>Your Balance</h4>
            <h1 id="balance">${calcTotal}</h1>
        </div>
    )
};

export default Balance;