import React from "react";


const SearchCandidate = ({ searchedCandidates }) => {
  const change = (event) => {
    searchedCandidates(event.target.value);
  };

  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <span>
            <i className="small material-icons">search</i>
          </span>
          <input
            type="text"
            onChange={change}
            placeholder="Search..."
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SearchCandidate;
