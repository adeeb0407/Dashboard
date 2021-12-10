import React, {useState } from 'react'
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

function TopPanelChart({topPanel}) {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Top Panel',
            },
        },
    };

    const labels = ['All Applications', 'Decision Taken', 'Doc OCR Utilization', 'Draft Applications', 'OCR Utilization', 'Pending Finance Approval', 'Pending Review', 'Ready To Submit', 'RPA Submission', 'Submitted To Embassy'];

    const data = {
        labels,
        datasets: [
            {
                label: '',
                data: [topPanel.all_applications, topPanel.decision_taken, topPanel.doc_ocr_utilization, topPanel.draft_applications, topPanel.ocr_utilization, topPanel.pending_finance_approval, topPanel.pending_review, topPanel.ready_to_submit, topPanel.rpa_submission, topPanel.submitted_to_embassy],
                backgroundColor: 'rgba(13, 131, 203, 1)',
            },
        ],
    };
        return (
            <div className="table-responsive " style={{minHeight: '550px'}}>
                <Bar className = 'topPanel' options={options} data={data} />
            </div>
        )
}

export default TopPanelChart
