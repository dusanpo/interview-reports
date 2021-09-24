import React from "react";


const Sidebar = (props) => {
  return (
    <div className="col">
      {props.page === 1 ? (
        <h4 className="col">
          <span> 1 </span> Select Candidate
        </h4>
      ) : (
        <h4 className="col">
          <span> 1 </span> Select Candidate
        </h4>
      )}

      {props.page === 2 ? (
        <h4 className="col">
          <span>2</span> Select Company
        </h4>
      ) : (
        <h4 className="col">
          <span>2</span> Select Company
        </h4>
      )}

      {props.page === 3 ? (
        <h4 className="col">
          <span>3</span> Fill Report Details
        </h4>
      ) : (
        <h4 className="col">
          <span>3</span> Fill Report Details
        </h4>
      )}
    </div>
  );
};

export default Sidebar;
