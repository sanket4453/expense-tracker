import React from 'react'

function IncomeExpense({transactions}) {

    const amounts = transactions.map(transaction => transaction.amount);
   
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+<span>&#8377;</span>{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-<span>&#8377;</span>{expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
