import React, { useContext, useEffect, useRef } from 'react'
import { GlobalTransactionContext } from '../Contexts/InputContext'
import { Chart, registerables } from 'chart.js';
import { color } from 'chart.js/helpers';

Chart.register(...registerables);

function ShowChart() {
    const {transaction, totalExpense, totalIncome} = useContext(GlobalTransactionContext);
    
    const chartRef = useRef(null);

    useEffect(() => {

        const loadCharts = () => {
            const script = document.createElement('script');
            script.src = 'https://www.gstatic.com/charts/loader.js';
            script.onload = () => {
                window.google.charts.load('current', { 'packages': ['corechart'] });

                window.google.charts.setOnLoadCallback(drawChart);
            }
            document.body.appendChild(script);
        };
        const drawChart = () => {
            const data = new window.google.visualization.DataTable();
            data.addColumn('string', 'Type');
            data.addColumn('number', 'Amount');

            data.addRows([
                ['Expense', totalExpense],
                ['Income', totalIncome]
            ]);

            const options = {
                title: "Chart of Income and Expenses",
                width: 250,
                height: 200
            };

            const chart = new window.google.visualization.PieChart(chartRef.current);
            chart.draw(data, options);
        }

        loadCharts();
    }, [transaction, totalExpense, totalIncome])

  return (
    <div className='bg-slate-500 w-full my-5 lg:w-64 mx-5 lg:my-1 rounded-lg flex flex-col h-[60%]'>
      <label className='bg-slate-200 rounded-tl-lg rounded-tr-lg text-black p-2 font-bold'>Pie Chart</label>
      <div className='flex flex-col justify-center items-center rounded-lg bg-slate-500'ref={chartRef} id='0' width="200px" height="200px"></div>
    </div>
  )
}

export default ShowChart
