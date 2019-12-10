import React, { Component } from 'react';
import DatetimeRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';

class PorformancePage extends Component{
    constructor(props) {
        super(props);
    
        this.handleApply = this.handleApply.bind(this);
    
        this.state = {
          startDate: moment().subtract(29, 'days'),
          endDate: moment(),
          ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
          },
        };
      }
    
      handleApply(event, picker) {
        this.setState({
          startDate: picker.startDate,
          endDate: picker.endDate,
        });
      }
    render() {
        let start = this.state.startDate.format('YYYY-MM-DD');
        let end = this.state.endDate.format('YYYY-MM-DD');
        let label = start + ' - ' + end;
        if (start === end) {
          label = start;
        }
        return (
            <div className="container-fluid bg-color pb-5">
                <div className="row pt-5">
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-3 col-4 pr-lg-0">
                                <img src="./dashboard/performance_dashboard_icon.png" className="w-100"/>
                            </div>
                            <div className="col-md-9 col-8 pl-lg-0 mt-lg-4 pt-xl-2 mt-2">
                                <h6 className="performance_title">Performance dashboard</h6>
                                <h6 className="member">Member: <span className="pr-3 example_member">Example Member</span>
                                <span className="border_left pl-3 member">ribe:</span>
                                <span className="example_member"> Freedom Entrepreneurs 7pm PT</span></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 pt-xl-2">
                        <div className="calendar mt-lg-4 mt-2 ml-lg-5">
                            <DatetimeRangePicker 
                                className="w-100"
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onApply={this.handleApply}
                            >
                                <div className="input-group float-left w-75">
                                    <input type="text" className="form-control foucs mt-2 ml-3 pt-2 border-0" value={label}/>
                                </div>
                                <div className="input-group-btn float-right mt-3 pl-4">
                                    <button className="default date-range-toggle bnt">
                                        <i className="fa fa-calendar"/>
                                    </button>
                                </div>
                            </DatetimeRangePicker>
                        </div>
                       
                    </div>
                </div>
                <div className="border_bottom mt-md-0 mt-3"></div>
                <style jsx>{`
                    .bg-color{
                        background-color:#f4fcfa; 
                    }
                    .performance_title{
                        font-size:29px;
                        color: #345771;
                        font-weight:800;
                        text-transform:uppercase; 
                    }
                    .cXcRCo{
                        z-index: 111px;
                    }
                    .member{
                        color: #a0b0b9;
                        font-weight:normal
                    }
                    .example_member{
                        color: #345771;
                        font-weight:bold;
                    }
                    .border_left{
                        border-left:2px solid #f0efef;
                    }
                    .foucs:focus{
                        outline: none !important;
                    }
                    .foucs{
                        box-shadow:none !important; 
                        width: 340px;
                        color: #345771;
                        font-weight:600;
                    }
                    .bnt{
                        background-color: transparent;
                        border: none;
                    }
                    .calendar{
                        background-color:white;
                        height: 60px;
                        width: 80%;
                        border-radius: 30px;
                        box-shadow: 0px 7px 10px 2px #0000001a;
                    }
                    .fa-calendar{
                        font-size: 20px;
                        color: #99abb8;
                    }
                    .react-datepicker-ignore-onclickoutside:focus{
                        outline: none !important;
                    }
                    .border_bottom{
                        border-bottom: 2px solid #e7e7e7;
                        width: 94%;
                        margin: 0 auto;
                    }
                    .DayPickerInput > input {
                        border: none !important;
                        width: 100%;
                    }
                    .foucs-0:focus {
                        outline: none;
                    }
                    input:focus {
                        outline-offset: 0px !important;
                    }
                    :focus{
                        outline: none !important;
                    }
                    @media only screen and (max-width: 440px){
                        .calendar{
                            width: 100%;
                        }
                        .foucs{
                            width: 300px;
                        }
                    }
                    @media only screen and (max-width: 810px){
                        .foucs{
                            width: 260px;
                        }
                        .calendar{
                            width: 100%;
                        }
                    }
                    `}</style>
            </div>
        )
    }
}
export default PorformancePage;