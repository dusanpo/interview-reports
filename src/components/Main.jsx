import React from "react";
import { Link } from "react-router-dom";

const Main = ({ items }) => {
  return (
    <div className="row container flexy">
      {items.map((item, index) => (
        <Link to={`/singleCandidate/${item.id}`}>
          <div className="col s6 m4" key={index}>
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
                <p className="black-text">{item.education}</p>
                <p className="black-text">{item.email}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Main;
