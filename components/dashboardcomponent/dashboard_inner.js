import React, { Component } from 'react';
import Dashboardheader from './headercomponent/dashboardHeader';
import PerformancePage from './PerformanceSection/performancePage';
import PCategories from './perforCategories/Performacecategorie';
import Chart from '../dashboardcomponent/chart/nivoBar'



class Dashboard extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="container-fluid pl-0 pr-0">
                    <Dashboardheader/>
                    <PerformancePage/>
                    <PCategories/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <Chart />
                            </div>
                            <div className="col-md-6">
                                <Chart />
                            </div>
                            <div className="col-12">
                                <Chart />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
        )
    }
}
export default Dashboard;