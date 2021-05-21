import React from 'react';
import  Header  from './components/Header';
import  Balance  from './components/Balance';
import  IncomeExpense  from './components/IncomeExpense';
import  TransactionList  from './components/TransactionList';
import  AddTransaction  from './components/AddTransaction';

// import { GlobalProvider } from './context/GlobalState';

import './App.css';


class App extends React.Component {
   constructor(props){
    super(props);
      this.state ={
      transactions:[
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
      ]
    }
  }
  myCallback = (dataFromChild) => {
    this.setState({ transactions :[ ...this.state.transactions, dataFromChild]})
 }

 addNote(newNote) {
  this.setState({ toDoNotes: [...this.state.toDoNotes, newNote]})
}
render(){
    console.log(this.state.transactions)
  return (
    // <GlobalProvider>
    <>
      <Header />
      <div className="container">
        <Balance transactions={this.state.transactions} />
        <IncomeExpense transactions={this.state.transactions} />
        <TransactionList transactions={this.state.transactions} />
        <AddTransaction callbackFromParent={this.myCallback} />
      </div>
      </>
    // </GlobalProvider>
  );
}
}

export default App;

//&#8377
//onSubmit={transactions => this.setState(transactions: transactions)}