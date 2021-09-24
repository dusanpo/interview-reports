import React from "react";
import "./CandidateSingle.css";


class CandidateSingle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <div
        className="col s6"
        id={this.props.id}
        onClick={() => this.props.getName(this.props.candidate)}>
        <div className="candidate-container">
            
          
            <div className="candidate-image">
              <img src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png" alt="" class="circle responsive-img"/> 
            </div>
            <div className="candidate-stacked">
              <span className="candidate-content">
                    <h2 className="row">{this.props.candidate.name}</h2>
                    <p className="row">{this.props.candidate.email}</p>
              </span>
            </div>
          
        </div>
      </div>  
      
    
    );
  }
}

export default CandidateSingle;

