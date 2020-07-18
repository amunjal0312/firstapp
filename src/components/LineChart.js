import React from 'react'
import { Line } from 'react-chartjs-2'
function LineChart () {

    const data = {

        labels:['Saving', 'Housing', 'Lifestyle', 'Transportation', 'Debt-Repayment'],
        datasets: [
            {
                label: 'Expenses Last Month',
                data: [10, 35, 25, 15, 15],
                borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
                pointBorderColor: 'rgba(255, 206, 86, 0.2)'
            }
        ]
    }
    
    const options ={
        title: {
            display: true,
            text: 'Income/Expense Summary'
        },

    }
    
    return(
        <div>
            <Line data={data} options={options} />
        </div>
    )

}
export default LineChart