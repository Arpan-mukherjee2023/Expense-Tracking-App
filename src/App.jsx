import React from 'react'
import './App.css'
import InputBox from './Components/InputBox'
import TransactionList from './Components/TransactionList'
import ShowStats from './Components/ShowStats'
import ShowChart from './Components/ShowChart'

function App() {
  return (
    <>
      <div className='flex flex-col justify-between text-white bg-slate-400 rounded-sm absolute left-[50%] -translate-x-1/2 w-full h-f[100%] lg:m-10 lg:w-[50%] lg:h-[90%] lg:flex-row'>
        <div className='flex flex-col items-center m-5'>
          <InputBox />
          <TransactionList />
        </div>
        <div className='flex flex-col items-center m-5'>
          <ShowStats />
          <ShowChart />
        </div>
      </div>
    </>

  )
}

export default App
