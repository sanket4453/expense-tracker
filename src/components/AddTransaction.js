import React from 'react'

class AddTransaction extends React.Component {
    // console.log(props)
    // const [text, setText] = useState('')
    // const [amount, setAmount] = useState(0)

    constructor(props){
        super(props);
        this.state ={
            text:'',
            amount:0
        }
    }

     onSubmit = e => {
        
        e.preventDefault();
        // const newTransaction ={
        //     id: Math.floor(Math.random() * 100000000),
        //     this.state.text = value,
        //     amount
        // }
        this.props.callbackFromParent({
            id: Math.floor(Math.random() * 100000000),
            text : this.state.text,
            amount: +this.state.amount
        })
        this.state.text=""
        this.state.amount=""
       
    }
    render(){
    return (
        <div>
            <h3>Add new Transaction</h3>
            <form onSubmit={this.onSubmit} >
                <div className="form-control">
                    <label htmlFor="text" >Text</label>
                    <input type="text" value={this.state.text}
                     onChange={(e) => this.setState({text:e.target.value})} 
                     placeholder="Enter Text" />
                </div>
                <div className="form-control">
                    <label for="amount">
                        Amount<br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={this.state.amount} 
                     onChange={(e) => this.setState({amount:e.target.value})}
                     placeholder="Enter Amount" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
}

export default AddTransaction
