import React, { useContext, useEffect, useState } from 'react'
import { GlobalTransactionContext } from '../Contexts/InputContext'

function ShowStats() {
    const { transaction, totalIncome, setTotalIncome, totalExpense, setTotalExpense, balance, setBalance } = useContext(GlobalTransactionContext);

    useEffect(() => {
        // optimisation needed
        let income = 0, expense = 0;
        for(let obj of transaction) {
            if(obj.type === 'expense') {
                expense += parseInt(obj.amount);
            } else {
                income += parseInt(obj.amount);
            }
        }    
        setTotalExpense(expense);
        setTotalIncome(income);
        let bal = income - expense;
        setBalance(bal);
        console.log(totalExpense, totalIncome);
        console.log(balance)
    }, [transaction])
  return (
    <>
    <div className='flex flex-col bg-slate-500  w-full h-56 p-5 rounded-lg lg:w-64 lg:m-5'>
    <div className='flex flex-row justify-between text-white'>
      <div className='text-left'>
        <h1 className='text-5xl lg:text-3xl text-red-500 font-bold'>₹ {totalExpense}</h1>
        <h2 className='text-sm'>Expense</h2>
      </div>
      <div className='text-right'>
        <h1 className='text-5xl lg:text-3xl text-green-500 font-bold'>₹ {totalIncome}</h1>
        <h2 className='text-sm'>Income</h2>
      </div>
    </div>
    <div className='flex flex-row lg:flex-col justify-end mt-5 text-right'>
        <h2 className='mx-2 text-sm self-end'>Balance</h2>
        <h1 className={`text-5xl font-extrabold ${balance < 0 ? 'text-red-500' : 'text-green-500'}`}>₹ {balance}</h1>
    </div>
    </div>
    </>
  )
}

export default ShowStats
