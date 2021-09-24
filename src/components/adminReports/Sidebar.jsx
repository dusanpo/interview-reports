import React from "react";
import "./Sidebar.css";


const Sidebar = (props) => {
  return (
    <div className="col">
      {props.page === 1 ? (
        <div>
            <h5 className="col">
                <span className="number">1</span> Select Candidate
            </h5>
        </div>
      ) : (
        <div>
            <h5 className="col">
                <span className="number">1</span> Select Candidate
            </h5>
        </div>
      )}

      {props.page === 2 ? (
        <div>
            <h5 className="col">
                <span className="number">2</span> Select Company
            </h5>
        </div>
      ) : (
        <div>  
            <h5 className="col">
                <span className="number">2</span> Select Company
            </h5>
        </div>
      )}

      {props.page === 3 ? (
        <div>  
            <h5 className="col">
                <span className="number">3</span> Fill Report Details
            </h5>
        </div>
      ) : (
        <div>  
            <h5 className="col">
                <span className="number">3</span> Fill Report Details
            </h5>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
