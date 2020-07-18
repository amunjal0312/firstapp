import React from 'react'
import { Pie } from 'react-chartjs-2'
function PieChart () {

    const data = {

        labels:['Saving', 'Housing', 'Lifestyle', 'Transportation', 'Debt-Repayment'],
        datasets: [
            {
                data: [10, 35, 25, 15, 15],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                weight: [2]
                
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
            <Pie data={data} options={options} />
        </div>
    )

}
export default PieChart