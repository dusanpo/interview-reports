import React from "react";


const SingleCompany = (props) => {
  return (
    <div onClick={() => props.getCompany(props.company)} className="collection">
      <a href="#!" className="collection-item">
        {props.company.name}
        </a>
    </div>
  );
};

export default SingleCompany;