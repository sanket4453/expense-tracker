import React from 'react'
import Transaction from './Transaction'

const TransactionList =({transactions}) => {
   // console.log(transactions);
    return (
       
        <div>
            <h3>History</h3>
            <ul  class="list">
                {transactions.map((transaction => <Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </div>
    )
}

export default TransactionList
