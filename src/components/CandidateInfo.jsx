import React ,{Fragment} from 'react';
import "./CandidateInfo.css"


// import LoginPage from './components/LoginPage';
// import LandingPage from './components/LandingPage';

const CandidateInfo = (props) => {
  return (
   <Fragment>
      <div className="container flexx">
        <div className="row">
            <img className="img-container" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="img"></img>
        </div>
        <div>
            <h2>
                <span>Name:</span>
                <br />
                {props.name}
            </h2>
        </div>
      </div>
    </Fragment>
   
  );
}

export default CandidateInfo;