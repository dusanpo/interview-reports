import React from "react";

const Main = ({ items }) => {
  return (
    <div className="row container flexy">
      {items.map((item, index) => (
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
              <p>{item.education}</p>
              <p>{item.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Main;
