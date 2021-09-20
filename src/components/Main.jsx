import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = ({ items }) => {
  return (
    <div className="row container">
      {items.map((item, index) => (
        <Link to={`/singleCandidate/${item.id}`} key={index}>
          <div className="col s12 m6 l4" >
            <div className="card">
              <div className="card-image">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="img"
                />
                <span className="card-title black-text text-darken-2">
                  {item.name}
                </span>
              </div>
              <div className="card-content">
                <p className="black-text paragraph">{item.education}</p>
                <p className="black-text paragraph">{item.email}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Main;


