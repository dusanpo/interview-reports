import React from "react";

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
    console.log(props)
    }
    onclose = () => {
        this.setState({show: true});
      };
    
  render() {
    if(this.props.show === false){
        return null;
    }
    return (
        <div>
            <div className="modal-content">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.note}</p>
                    <p>{this.props.phase}</p>
            </div>
            <div class="modal-footer">
                    <button 
                    className = "close-modal"
                    onClick = {this.onClose} >CLOSE</button>
            </div>
            
        </div>
    )
  }
}