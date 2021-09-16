import React from 'react';
import SingleReport from './SingleReport';
import getDate from './Date';

class Reports extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {}
    }
    
  render() {

      return (
       <>
        <h2>Reports</h2>
        <table>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>interview Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            {this.props.reports.map((report, index)=>(
                <SingleReport
                    key={index}
                    company={report.companyName}
                    date={getDate(report.interviewDate)}
                    status={report.status}
                    phase={report.phase}
                    note={report.note}
                />
            ))}
        </table>
       </>
       
      );
  }  
}

export default Reports;