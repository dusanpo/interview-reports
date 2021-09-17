import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
       
    }
  
    
  render() {
    if(this.props.show === false){
        return null;
    } 
    return (
        <div className = "overlay">

            <div className="modal-content modal-container">
                <div className="flex-content-title">
                    <h3>{this.props.name}</h3>
                  
                    <i className="medium material-icons pointer" onClick = {(this.props.showModal)}>cancel</i>
                </div>
                    <hr/>
                <div className="flex-content">
                    <div className="flex-content-inner">
                        <h6>Company: </h6>
                        <h5>{this.props.company}</h5>
                        <h6>Date: </h6>
                        <h5>{this.props.date}</h5>
                        <h6>Phase: </h6>
                        <h5>{this.props.phase}</h5>
                        <h6>Status: </h6>
                        <h5>{this.props.status}</h5>
                    </div>
                    <div className="flex-content-inner">
                        <h6>Note: </h6>
                        <h6>{this.props.note}</h6>
                    </div>
                </div>
            </div>
               
        </div>
    )
  }
}