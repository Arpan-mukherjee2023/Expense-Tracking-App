import React, { useContext, useState } from 'react'
import { GlobalTransactionContext } from '../Contexts/InputContext';

function InputBox() {

    const {transaction, setTransaction} = useContext(GlobalTransactionContext);
    const [data, setData] = useState({
        id: 0,
        amount: '',
        type: 'expense',
        category: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        setData(prev => ({
            id: prev.id + 1,
            amount: '',
            type: 'expense',
            category: ''
        }))

        setTransaction([...transaction, data]);
        console.log("Transaction Array after Inserting");
        console.log(transaction);
    }

  return (
    <form className='bg-slate-500 text-white w-96 flex flex-col p-2 rounded-lg justify-between lg:w-48 lg:m-5' onSubmit={handleSubmit}>

      <input 
      name='amount'
      type='number'
      value={data.amount}
      onChange={handleChange}
      className='text-black'
      placeholder='Amount' 
      required
      />
      

      <div className='flex flex-row justify-center align-middle my-1'>

        <input
        type='radio' 
        name='type' 
        value='expense' 
        className='mx-2'
        checked={data.type === 'expense'}
        onChange={handleChange}/>
        <label htmlFor='expense'>Expense</label>

        <input 
        type='radio' 
        name='type' 
        value='income' 
        className='mx-2'
        checked={data.type === 'income'}
        onChange={handleChange}/>
        <label htmlFor='income'>Income</label>

      </div>

      <select
      name='category'
      value={data.category}
      onChange={handleChange}
      className='my-2 text-black'
      >
        <option value="" disabled>Category</option>
        <option value="Salary">Salary</option>
        <option value="Bonus">Bonus</option>
        <option value="Gift">Gift</option>
        <option value="Transport">Transport</option>
        <option value="Food">Food</option>
        <option value="Rent">Rent</option>
        <option value="Bill">Bill</option>
        <option value="Accessories">Accessories</option>
        

      </select>

      <button className='bg-slate-900 text-white hover:bg-blue-500' type='submit'>Add</button>
    </form>
  )
}

export default InputBox
