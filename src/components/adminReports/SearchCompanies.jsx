import React from "react";



const SearchCompanies = (props) => {
  return (
    <div>
      <div className="row">
        <h2 className="col"> </h2>
        <div className="col">
          <span>
            <i className="small material-icons">search</i>
          </span>
          <input
            
            onChange={props.searchCompanies}
            type="search"
            placeholder="Search companies..."
          />
        </div>
      </div>
      <hr />
    </div>
  );
};
export default SearchCompanies;
