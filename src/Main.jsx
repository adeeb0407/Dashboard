import React, { useEffect, useState } from 'react'
import './main.css'
import axios from 'axios'
import TopPanelChart from './components/TopPanelChart'
import StatsMain from './components/Stats/StatsMain'

function Main() {
    const [topPanel, setTopPanel] = useState([])
    const [detailedStats, setDetailedStats] = useState([])
    const [apiHit, setApiHit] = useState(false)

    useEffect(() => {
        axios.post('https://services.visaero.com/visa-admin/getDashboardData', {

            user_id: '6082a6ece8c60eff68a30d8a',

            start_date: "2021-09-01T05:45:00.000Z",

            end_date: "2021-12-07T05:45:43.461Z",

            host: "visadone"

        }).then((res) => {
            if (res.data.data === 'success') {
                setTopPanel(res.data.dataobj.top_panel)
                setDetailedStats(res.data.dataobj.detailed_stats)
                setApiHit(true)
                return;
            }
        })
            .catch(error => console.error(error))
    }, [])
    // console.log(topPanel)

    if (apiHit) {
        return (
            <div className="table-responsive " style={{ minHeight: '550px' }}>
                <TopPanelChart
                    topPanel={topPanel} />
                <StatsMain
                    detailedStats={detailedStats}
                />
            </div>
        )
    } else {
        return (
            <div>
                Loading
            </div>
        )
    }
}

export default Main
