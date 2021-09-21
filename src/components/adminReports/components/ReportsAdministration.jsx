import React from 'react'
import ReportsList from "./ReportsList";

class ReportsAdministration extends React.Component {

    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            reports: [],
            filteredReports: []
        }
    }

  
    componentDidMount() {
        const USER_ACCESS_TOKEN = JSON.parse(localStorage.getItem("token"));
      fetch("http://localhost:3333/api/reports", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + USER_ACCESS_TOKEN,
        },
      }
      
      )
        .then((res) => res.json())
        .then((results) => 
        //console.log(results)
        this.setState({ reports: results })
        );
        

    }
    render() {
        return (
            <div>
                <ReportsList 
                    reports={this.state.reports}
                /> 
            </div>
        )
    }
}

export default ReportsAdministration
