import React from 'react'
import SingleListReport from "./SingleListReport";
import "./ReportsList.css"

const ReportsList = (props) => {
     
        return (
           <>
            <div className="container">
                <div className="flex-report">
                    <div className="flex-report-inner">
                        <input  type="search" name="search" placeholder="Search ..." />
                    </div>
                    <div className="flex-report-inner">
                        <i className="medium material-icons">add</i>
                        <p>Create Report</p>
                    </div>
                </div>
            </div>
            <div>
            <SingleListReport 
                reports = {props.reports}
            />
            </div>

            </>
        )
}



export default ReportsList
