import React, { useContext } from 'react'
import EachTransaction from './EachTransaction'
import { GlobalTransactionContext } from '../Contexts/InputContext'

function TransactionList() {
    const {transaction, setTransaction} = useContext(GlobalTransactionContext);
  return (
    <div className='flex flex-col text-white bg-slate-500 w-full h-96 mx-5 my-3 rounded-lg  lg:h-3/5 lg:w-48'>
        <h2 className='bg-slate-200 rounded-tl-lg rounded-tr-lg text-black p-2 font-bold'>Transactions</h2>
        <div className='flex flex-col my-2 mx-1 overflow-y-scroll scroll'>
            {
                transaction.map((t, idx) => {
                    return <EachTransaction value={t} key={idx}/>
                })
            }
        </div>
    </div>
  )
}

export default TransactionList
