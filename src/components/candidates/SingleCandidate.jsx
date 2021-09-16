import React from "react";
import Reports from "../Reports.jsx";
import CandidateInfo from "./candidateInfo/CandidateInfo.jsx";

class SingleCandidate extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        candidate: [],
        candidateId: null,
        reports: [],
      };
    }
  
    getReportsInfo = () => {
        const USER_ACCESS_TOKEN = JSON.parse(localStorage.getItem("token"));
      fetch(
        `http://localhost:3333/api/reports?candidateId=${this.props.match.params.id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + USER_ACCESS_TOKEN,
            },
          }

      )
        .then((res) => {
          
          return res.json();
        })
        .then((reportData) => this.setState({ reports: reportData }));
    };
  
    componentDidMount() {
        const USER_ACCESS_TOKEN = JSON.parse(localStorage.getItem("token"));
      fetch(`http://localhost:3333/api/candidates/${this.props.match.params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + USER_ACCESS_TOKEN,
        },
      }
      
      )
        .then((res) => res.json())
        .then((candidateData) => {
          this.setState({
            candidate: candidateData,
            candidateId: this.props.match.params.id,
          });
        });
        console.log(this.state.candidate);
      this.getReportsInfo();
    }
  
    render() {
      return (
        <div>
          <div className="container">
            <CandidateInfo
              name={this.state.candidate.name}
              birthday={this.state.candidate.birthday}
              email={this.state.candidate.email}
              education={this.state.candidate.education}
            />
            <Reports 
            reports={this.state.reports}
             />
          </div>
          
        </div>
      );
    }
  }
  
  export default SingleCandidate;