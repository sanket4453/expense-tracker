import React from 'react'

function Balance({transactions}) {
    if(!transactions){
        return(
            <div></div>
        )
    }
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 className="balance"><span>&#8377;</span>{total}</h1>
        </div>
    )
}

export default Balance
