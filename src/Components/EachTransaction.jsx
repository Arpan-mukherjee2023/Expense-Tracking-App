import React, { useContext } from 'react'
import { GlobalTransactionContext } from '../Contexts/InputContext'

function EachTransaction({value}) {
  const {transaction, setTransaction} = useContext(GlobalTransactionContext);
  
  const handleClick = (id) => {
    for(let obj of transaction) {
      if(id === obj.id) {
        const updatedTransaction = transaction.filter(trans => trans.id !== id);
        setTransaction(updatedTransaction);
        console.log("Transaction Array after Deleting");
        console.log(transaction)
      }
    }
  }
  return (
    <div className={`flex flex-row justify-between px-3 ${value.type === 'expense' ? 'bg-red-400' : 'bg-green-400'} p-1 w-full rounded-lg my-1`}>
      <div>
        <h1>Rs. {value.amount}</h1>
        <h2 className='text-xs'>{value.category}</h2>
      </div>
      <button onClick={() => handleClick(value.id)}>X</button>
    </div>
  )
}

export default EachTransaction
