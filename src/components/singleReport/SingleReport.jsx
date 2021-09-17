import React from 'react';
import Modal from "../modal/Modal.jsx";
import "./SingleReport.css";

class SingleReport extends React.Component {
    constructor(props) {
        super(props)
        
        
       this.state = {
           show: false,
       }
    }
    
   
      showModal = () => {
        this.setState({show: !this.state.show});
      };

    render() {
        return (
                <>
                <tbody>
                    <tr>
                        <td>{this.props.company}</td>
                        <td>{this.props.date}</td>
                        <td>{this.props.status}</td>
                        <td>
                        
                            <i className="material-icons" onClick={this.showModal}>remove_red_eye</i>
                        </td>
                    </tr>
                </tbody>
                <Modal showModal = {this.showModal}
                    name={this.props.name} 
                    show={this.state.show}
                    company={this.props.company}
                    date={this.props.date}
                    phase={this.props.phase}
                    note={this.props.note}
                    status={this.props.status}
                ></Modal>
                
                </>
            
        )
    }
}
export default SingleReport;
