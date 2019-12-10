import React, { Component } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
import { Chart } from "react-google-charts";

// const options = {
//     chart: {
//       type: 'spline'
//     },
//     title: {
//       text: ''
//     },
//     series: [
//       {
//         data: [1, 2, 1, 4, 3, 6]
//       }
//     ]
//   };

class DashboardChart extends Component{

    render() {
        return (
            <div className="container-fluid bg-color pb-5">
                <div className="bg-color-1 mr-lg-4 pb-5">
                    <div className="row pt-4">
                        <div className="col-md-6">
                            <Chart
                             className="pl-lg-5 pr-lg-5 pl-3 pr-3"
                                height={'500'}
                                chartType="Line"
                                loader={<div></div>}
                                data={[
                                    [
                                    { type: 'date', label: '' },
                                    '',
                                    '',
                                    ],
                                    [new Date(2014, 0), -0.5, 5.7],
                                    [new Date(2014, 1), 0.4, 8.7],
                                    [new Date(2014, 2), 0.5, 12],
                                    [new Date(2014, 3), 2.9, 15.3],
                                    [new Date(2014, 4), 6.3, 18.6],
                                    [new Date(2014, 5), 9, 20.9],
                                    [new Date(2014, 6), 10.6, 19.8],
                                    [new Date(2014, 7), 10.3, 16.6],
                                    [new Date(2014, 8), 7.4, 13.3],
                                    [new Date(2014, 9), 4.4, 9.9],
                                    [new Date(2014, 10), 1.1, 6.6],
                                    [new Date(2014, 11), -0.2, 4.5],
                                ]}
                                options={{
                                    height: 500,
                                    series: {
                                    // Gives each series an axis name that matches the Y-axis below.
                                    0: { axis: '' },
                                    1: { axis: '' },
                                    },
                                    axes: {
                                    // Adds labels to each axis; they don't have to match the axis names.
                                    y: {
                                        Temps: { label: '' },
                                        Daylight: { label: '' },
                                    },
                                    },
                                }}
                                
                                rootProps={{ 'data-testid': '4' }}
                                />
                                <div className="row pt-3 pl-4">
                                    <div className="col-md-4 col-6 pl-lg-4">
                                        <img src="./dashboard/blue.png" className="goal_img" />
                                        <span className="goal_completed">Goals Completed</span>
                                    </div>
                                    <div className="col-md-6 col-6 pl-lg-0">
                                        <img src="./dashboard/green.png" className="goal_img_4" />
                                        <span className="goal_completed">Goals Set</span>
                                    </div>
                                </div>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-5">
                        <Chart
                               width={'100%'} 
                                height={'500'}
                                chartType="Line"
                                loader={<div className="border-left">Loading Chart</div>}
                                data={[
                                    [
                                    { type: 'date', label: '' },
                                    '',
                                    '',
                                    ],
                                    [new Date(2014, 0), -0.5, 5.7],
                                    [new Date(2014, 1), 0.4, 8.7],
                                    [new Date(2014, 2), 0.5, 12],
                                    [new Date(2014, 3), 2.9, 15.3],
                                    [new Date(2014, 4), 6.3, 18.6],
                                    [new Date(2014, 5), 9, 20.9],
                                    [new Date(2014, 6), 10.6, 19.8],
                                    [new Date(2014, 7), 10.3, 16.6],
                                    [new Date(2014, 8), 7.4, 13.3],
                                    [new Date(2014, 9), 4.4, 9.9],
                                    [new Date(2014, 10), 1.1, 6.6],
                                    [new Date(2014, 11), -0.2, 4.5],
                                ]}
                                options={{
                                    height: 500,
                                    series: {
                                    // Gives each series an axis name that matches the Y-axis below.
                                    0: { axis: '' },
                                    1: { axis: '' },
                                    },
                                    axes: {
                                    // Adds labels to each axis; they don't have to match the axis names.
                                    y: {
                                        Temps: { label: '' },
                                        Daylight: { label: '' },
                                    },
                                    },
                                }}
                                
                                rootProps={{ 'data-testid': '4' }}
                                />
                                <div className="row pt-3 pl-2 pr-3">
                                    <div className="col-md-5 pr-0">
                                        <img src="./dashboard/blue.png" className="goal_img_2" />
                                        <span className="goal_completed">Exercise Sessions</span> 
                                        <img src="./dashboard/green.png" className="goal_img_2 ml-3" />
                                        <span className="goal_completed">Diet</span>
                                    </div>
                                    <div className="col-md-6 pl-0">
                                        <img src="./dashboard/red.png" className="goal_img_1" />
                                        <span className="goal_completed">Psychology</span>
                                        <img src="./dashboard/yellow.png" className="goal_img_1 ml-3" />
                                        <span className="goal_completed">GoalsCompleted</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="row pt-5 pl-4 pr-4 mt-5">
                        <div className="col-12 pl-lg-auto pr-lg-auto pl-0 pr-0">
                            <Chart
                               width={'100%'} 
                                height={'500'}
                                chartType="Line"
                                loader={<div></div>}
                                data={[
                                    [
                                    { type: 'date', label: '' },
                                    '',
                                    '',
                                    ],
                                    [new Date(2014, 0), -0.5, 5.7],
                                    [new Date(2014, 1), 0.4, 8.7],
                                    [new Date(2014, 2), 0.5, 12],
                                    [new Date(2014, 3), 2.9, 15.3],
                                    [new Date(2014, 4), 6.3, 18.6],
                                    [new Date(2014, 5), 9, 20.9],
                                    [new Date(2014, 6), 10.6, 19.8],
                                    [new Date(2014, 7), 10.3, 16.6],
                                    [new Date(2014, 8), 7.4, 13.3],
                                    [new Date(2014, 9), 4.4, 9.9],
                                    [new Date(2014, 10), 1.1, 6.6],
                                    [new Date(2014, 11), -0.2, 4.5],
                                ]}
                                options={{
                                    height: 450,
                                    series: {
                                        0: { axis: '' },
                                        1: { axis: '' },
                                    },
                                    axes: {
                                    y: {
                                        Temps: { label: '' },
                                        Daylight: { label: '' },
                                    },
                                    },
                                }}
                                rootProps={{ 'data-testid': '4' }}
                                />
                                <div className="row pt-3 pl-2 pr-3">
                                    <div className="col-md-7 pr-0">
                                        <img src="./dashboard/blue.png" className="goal_img_3" />
                                        <span className="goal_completed">Goals Completed</span> 
                                        <img src="./dashboard/green.png" className="goal_img_3 ml-3" />
                                        <span className="goal_completed">Courage</span>
                                        <img src="./dashboard/red.png" className="goal_img_3 ml-3" />
                                        <span className="goal_completed">Clarity</span>
                                        <img src="./dashboard/yellow.png" className="goal_img_3 ml-3" />
                                        <span className="goal_completed">Focus</span>
                                        <img src="./dashboard/dark_blue.png" className="goal_img_3 ml-lg-3" />
                                        <span className="goal_completed">Accountability</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                
                <style jsx>{`
                        .bg-color{
                            background-color:#f4fcfa; 
                        }
                        .bg-color-1{
                            background-color: white;
                            border-radius: 8px;
                            margin-left:40px;
                        }
                        .goal_completed{
                            font-size: 14px;
                            color: #9ea7ae;
                            font-weight: 700;
                            margin-left: 10px;
                        }
                        .goal_img{
                            width: 14%;
                        }
                        .goal_img_1{
                            width: 9%;
                        }
                        .goal_img_4{
                            width: 9%;
                        }
                        .goal_img_2{
                            width: 11%;
                        }
                        .goal_img_3{
                            width: 4%;
                        }
                        @media only screen and (max-width:800px){
                            .bg-color-1{
                                margin-left: 0px !important;
                            }
                            
                        }
                        @media only screen and (max-width:440px){
                            .bg-color-1{
                                margin-left: 0px !important;
                            }
                            .goal_img_2{
                                width: 5%;
                            }
                            .goal_img_1{
                                width: 5%;
                                margin-left:15px 
                            }
                            .goal_img_4{
                                width: 13%;
                            }
                            .goal_completed{
                                font-size: 13px;
                            }
                        }
                    `}
                    </style>
            </div>
        )
    }
}
export default DashboardChart;