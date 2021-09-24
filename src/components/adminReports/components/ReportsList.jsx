import React from 'react'
import SingleListReport from "./SingleListReport";
//import CreateReportsWizard from "../../adminReports/CreateReportWizard";
import { Link } from 'react-router-dom'
import "./ReportsList.css"

const ReportsList = ({search, query, reports}) => {
    const onSearch = (q)=>{
        search({query: q})
    }
     
        return (
           <>
            <div className="container">
                <div className="flex-report">
                    <div className="flex-report-inner">
                        <input  type="search" name="search" placeholder="Search ..."
                        onChange={(e)=>onSearch(e.target.value)}
                        value={query}

                        />
                    </div>
                    <div className="flex-report-inner">
                        <Link to ="/createReportsWizard">
                            <button className = "btn-large #008B8B">Create Report</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
            <SingleListReport 
                reports = {reports}
            />
            
            </div>

            </>
        )
}



export default ReportsList
