import React ,{Fragment} from 'react';
import "./CandidateInfo.css";




const CandidateInfo = ({email, name, education}) => {
  return (
   <Fragment>
        <div className ="col s12 m7 myClass">
    <div className="card horizontal">
      <div className="card-image">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt = "img" className = "responsive-img" />
      </div>
      <div className = "card-stacked">
        <div className = "card-content">
          <p>Name: </p>
          <p className = "info">{name}</p>
        </div>
        <div className = "card-content">
          <p>Email: </p>
          <p className = "info">{email}</p>
        </div>
        <div className = "card-content">
          <p>Education: </p>
          <p className = "info">{education}</p>
        </div>
      </div>
    </div>
  </div>
    </Fragment>
   
  );
}

export default CandidateInfo;