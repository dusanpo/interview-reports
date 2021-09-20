import React from 'react';
import { Row, Col, Card, CardTitle } from 'react-materialize';
import "./CandidateInfo.css";


const CandidateInfo = ( props) => {
  let dateOfBirth = new Date(props.birthday);
  let day = dateOfBirth.getDate();
  let month = dateOfBirth.getMonth() + 1;
  let year = dateOfBirth.getUTCFullYear();
  return (


<Row>
  <Col s={12} m={6} l={3}>
 <Card
    header = {<CardTitle image="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"></CardTitle>}
  ></Card>
  </Col>
  <Col s={12} m={6} l={8}>
      <Card>
                   
      <p>Name:</p>
      <h6>{props.name}</h6><br/>
      <p>Email:</p> 
      <h6>{props.email}</h6><br/>
      <p>Education:</p>
      <h6>{props.education}</h6><br/>
      <p>Birthday: </p>
      <h6>{day}.{month}.{year}.</h6><br/>

        </Card>
              
  </Col>

</Row>
    
 
  );
}

export default CandidateInfo;