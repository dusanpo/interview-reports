import React from 'react'
import getDate from '../../Date'
//import "./SingleListReport.css"
import Modal from '../../modal/Modal'

class SingleListReport extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
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
                {this.props.reports.map((report, index) => (
                    <tr key={index} className="flex-single">
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
                            <i className="small material-icons">delete_forever</i>
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
