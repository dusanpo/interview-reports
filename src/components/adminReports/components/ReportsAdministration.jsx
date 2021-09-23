import React from 'react'
import ReportsList from "./ReportsList";

class ReportsAdministration extends React.Component {

    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            reports: [],
            query: ""
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
        const filteredUsers = this.state.reports.filter(report => report.companyName.toLowerCase().includes(this.state.query.toLowerCase().trim()));
        return (
            <div>
                <ReportsList 
                    //reports={this.state.reports}
                    reports = {filteredUsers}
                    search={(q)=>this.setState(q)} query={this.state.query}
                /> 
            </div>
        )
    }
}

export default ReportsAdministration
