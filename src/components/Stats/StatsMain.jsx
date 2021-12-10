import React from 'react'
import StatsNavbar from './StatsNavbar'
import {Routes , Route} from 'react-router-dom'
import RoutesGraph from './StatsGraphs/RoutesGraph'
import FromCountryGraph from './StatsGraphs/FromCountryGraph'
import FromBranchGraph from './StatsGraphs/FromBranchGraph'
import FromAgencyGraph from './StatsGraphs/FromAgencyGraph'
import FromTravelDeskGraph from './StatsGraphs/FromTravelDeskGraph'
import VisaCategoryGraph from './StatsGraphs/VisaCategoryGraph'
import VisaTypeGraph from './StatsGraphs/VisaTypeGraph'
import PaymentGraph from './StatsGraphs/PaymentGraph'
import CostCenterGraph from './StatsGraphs/CostCenterGraph'

function StatsMain({detailedStats}) {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Router',
            },
        },
    };

    return (
        <div className="statsMain">
            <StatsNavbar />
            <div className="statsGraphs">
            <Routes>
            <Route exact path = '/' element = {<RoutesGraph detailedStats = {detailedStats[0]} options = {options}/>} />
            <Route exact path = '/fromcountry' element = {<FromCountryGraph detailedStats = {detailedStats[1]} options = {options}/>} />
            <Route exact path = '/fromBranch' element = {<FromBranchGraph detailedStats = {detailedStats[2]} options = {options} />} />
            <Route exact path = '/fromagency' element = {<FromAgencyGraph detailedStats = {detailedStats[3]} options = {options} />} />
            <Route exact path = '/fromtraveldesk' element = {<FromTravelDeskGraph detailedStats = {detailedStats[4]} options = {options} />} />
            <Route exact path = '/visacategory' element = {<VisaCategoryGraph detailedStats = {detailedStats[5]} options = {options} />} />
            <Route exact path = '/visatype' element = {<VisaTypeGraph detailedStats = {detailedStats[6]} options = {options} />} />
            <Route exact path = '/payment' element = {<PaymentGraph detailedStats = {detailedStats[7]} options = {options} />} />
            <Route exact path = '/costcenters' element = {<CostCenterGraph detailedStats = {detailedStats[8]} options = {options} />} />
            </Routes>
            </div>
        </div>
    )
}

export default StatsMain
