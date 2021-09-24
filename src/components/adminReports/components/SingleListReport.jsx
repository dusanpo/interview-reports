import React from 'react'
import getDate from '../../Date'
import "./SingleListReport.css"
import Modal from '../../modal/Modal'

class SingleListReport extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
          reports:[],
            show: false,
            report: {
                candidateName:"",
                phase:"",
                status:"",
                note:"",
                interviewDate:"",
                companyName:""
            } 
        }
    }
    
    getUsers = () =>{
        const USER_ACCESS_TOKEN = JSON.parse(localStorage.getItem("token"));
       
       fetch("http://localhost:3333/api/reports", {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
           "Authorization": "Bearer " + USER_ACCESS_TOKEN,
         },
      }).then((res) => {
             
       return res.json();
     }).then((candidateReport) =>this.setState({
         reports: candidateReport
   
     }))
   
      
   }

   componentDidMount(){
    this.getUsers();
}

deleteReport = (id) =>{
    const USER_ACCESS_TOKEN = JSON.parse(localStorage.getItem("token")); 
    if(window.confirm("Thss will be deleted! Are you sure?")){
    fetch(`http://localhost:3333/api/reports/${id}`,{
      method:"DELETE",
      headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + USER_ACCESS_TOKEN,
            },

    }).then((result)=>{
        return result.json();
    }).then((resp)=>{
          
         console.log(resp)
         this.getUsers();
         

        })
    }
  }


    openModal(report) {
        report.interviewDate = getDate(report.interviewDate);
        this.setState({report:report, show: !this.state.show});
    }
    
    showModal = () => {
        this.setState({show: !this.state.show});
      };
    
    render() {

        return (
        <>
            <table className="responsive-table centered highlight container">
                {this.props.reports.map((report) => (
                    <tr key={report.id} className="flex-single">
                        <td className="flex-single-div">
                            <h5>{report.companyName}</h5>
                            <p className="left-align">Company</p>
                        </td>
                        <td className="flex-single-div">
                            <h5>{report.candidateName}</h5>
                            <p>Candidate</p>
                        </td>
                        <td className="flex-single-div">
                            <h5>{getDate(report.interviewDate)}</h5>
                            <p>Interview Date</p>
                        </td>
                        <td className="flex-single-div">
                            <h5>{report.status}</h5>
                            <p>Status</p>
                        </td>
                        <td className="flex-single-row">
                            <i className="small material-icons" onClick={()=>this.openModal(report)}>remove_red_eye</i>
                            <i className="small material-icons deleteIcon" onClick = {()=>this.deleteReport(report.id)}>delete_forever</i>
                        </td>
                    </tr>

                ))}
            </table>
            <Modal
                    show={this.state.show}
                    showModal = {this.showModal}
                    name={this.state.report.candidateName} 
                    company={this.state.report.companyName}
                    date={this.state.report.interviewDate}
                    phase={this.state.report.phase}
                    note={this.state.report.note}
                    status={this.state.report.status}       
            >
            </Modal>
        </>    
        )
    }
}

export default SingleListReport
