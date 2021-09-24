import React from "react";


class CandidateSingle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <div
        id={this.props.id}
        onClick={() => this.props.getName(this.props.candidate)}>
        <div className="card small horizontal">
            
          
            <div className="card-image">
              <img src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png" alt="" class="circle responsive-img"/> 
            </div>
            <div className="card-stacked">
              <span className="card-content">
                    <h2 className="col">{this.props.candidate.name}</h2>
                    <p className="col">{this.props.candidate.email}</p>
              </span>
            </div>
          
        </div>
      </div>  
      
    
    );
  }
}

export default CandidateSingle;

