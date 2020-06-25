import React from 'react' 

function IncomeExpense ({amounts}) {
  const totalExpenses = amounts
                          .filter((item) => item < 0)
                          .reduce((total, num) => total + num, 0)
  const totalIncome = amounts
                          .filter(((item) => item > 0))
                          .reduce((total, num) => total + num, 0);
 

    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
    <p className="money plus">+${totalIncome}</p>
        </div>
        <div>
          <h4>Expense</h4>
    <p className="money minus">-${Math.abs(totalExpenses)}</p>
        </div>
      </div>
    )
};

export default IncomeExpense;