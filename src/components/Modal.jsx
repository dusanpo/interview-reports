import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        console.log(props)
    }
    onClose = () => {
        this.setState({show: !this.state.show});
      };
    
  render() {
    if(this.props.show === false){
        return null;
    } 
    return (
        <div>
           

            <div className="modal-content modal-container">
                <div className="flex-content-title">
                    <h2>{this.props.name}</h2>
                    {/* <button className = "close-modal" onClick = {this.onClose} >CLOSE</button> */}
                    <i class="medium material-icons" onClick = {(this.onClose)}>cancel</i>
                </div>
                    <hr/>
                <div className="flex-content">
                    <div className="flex-content-inner">
                        <p>Company: </p>
                        <h6>{this.props.company}</h6>
                        <p>Date: </p>
                        <h6>{this.props.date}</h6>
                        <p>Phase: </p>
                        <h6>{this.props.phase}</h6>
                        <p>Status: </p>
                        <h6>{this.props.status}</h6>
                    </div>
                    <div className="flex-content-inner">
                        <p>Note: </p>
                        <p>{this.props.note}</p>
                    </div>
                </div>
            </div>
            
            
            
        </div>
    )
  }
}