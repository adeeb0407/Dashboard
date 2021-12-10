import React, {useState} from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function VisaCategoryGraph({detailedStats, options}) {
    const [graphData, setgraphData] = useState(detailedStats.stats)
    console.log(graphData)

    console.log(graphData)

    const labels = graphData.slice(0, 10).map((dataItems)=> dataItems._id);

    const data = {
        labels,
        datasets: [
            {
                label: '',
                data: graphData.slice(0, 10).map((dataItems)=> dataItems.value),
                backgroundColor: 'rgba(234, 57, 25, 1)',
            },
        ],
    };


    return (
            <div className="table-responsive graphAligiment">
             <Bar className = 'graphPresent' options={options} data={data} />
        </div>
    )
}

export default VisaCategoryGraph
