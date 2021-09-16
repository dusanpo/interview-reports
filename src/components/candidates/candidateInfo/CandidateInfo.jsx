import React from 'react';
import "./CandidateInfo.css";


const CandidateInfo = ( props) => {
  let dateOfBirth = new Date(props.birthday);
  let day = dateOfBirth.getDate();
  let month = dateOfBirth.getMonth() + 1;
  let year = dateOfBirth.getUTCFullYear();
  return (
  
     
       <div className ="col s12 m7 ">
    <div className="card horizontal">
     
      <div className="card-image">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt = ""  className = "myImage" />
      </div>
      <div className = "card-stacked">
        <div className = " card-content">
          <p>Name: </p>
          <p className = "info">{props.name}</p>
          <p>Email: </p>
          <p className = "info">{props.email}</p>
        </div>
       </div>
       
        <div className = "card-content">
          <p>Education: </p>
          <p className = "info">{props.education}</p>
      
          <p>Birthday: </p>
          <p className = "info">{day}.{month}.{year}.</p>
        </div>
 
      </div>
    </div>

   
  );
}

export default CandidateInfo;