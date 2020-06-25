import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpenseTracker';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import TransactionHistory from './components/TransactionHistory';
import axios from 'axios'

const url = '/api/v1/transaction'

function App() {
  const [transactions, setTransactions ] = useState([])
  
  const amounts = transactions.map(transaction => Number(transaction.amount))
  
  const getTransactions = async (url) => {
   try {
    const res = await axios.get(url)

    setTransactions((transactions) => {
      return [...res.data.data]
    })
    
   } catch (error) {
     console.log(error)
   }
  
  }

  useEffect(() => {
   getTransactions(url)
  //  updateTotal(amounts)
  }, [])

 const deleteTransaction = async (id) => {
   try {
    await axios.delete(`${url}/${id}`)
    setTransactions(transactions.filter((item) => item._id !== id))
   } catch (error) {
     return {
       transactions, 
       error
     }
   }
     
  }
 
 const addTransaction = async (transaction) => {
   const config = {
     "Content-type": "application/json"
   }

  try {
    await axios.post(url, transaction, config)
    setTransactions([...transactions, transaction])
  } catch (error) {
    console.log(error)
  }
   
 }

  return (
    <div>
      <Header />
      <Balance transactions={amounts}/>
      <IncomeExpense amounts={amounts}/>
      <TransactionHistory transactions={transactions} deleteTransaction={deleteTransaction}/>
      <AddTransaction handleSubmit={addTransaction}/>

    </div>
  );
}

export default App;
