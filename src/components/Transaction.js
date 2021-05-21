import React from 'react'

function Transaction({transaction}) {
   // console.log(transaction);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {transaction.text}  <span>{sign} <span>&#8377;</span> {Math.abs(transaction.amount)}</span>
      </li>
    )
}

export default Transaction

//<button className="delete-btn">x</button>
