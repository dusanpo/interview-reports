import React from "react";
import SearchCandidate from "./SearchCandidate";
import CandidateSingle from "./CandidateSingle"
import "./CandidateSelect.css";

class SelectCandidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      filteredCandidates: [],
    };
  }

  componentDidMount() {
    const USER_ACCESS_TOKEN = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:3333/api/candidates", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + USER_ACCESS_TOKEN,
        },
      }
      
      )
    .then((res) => res.json())
    .then((candidates) =>
      this.setState({
        candidates: candidates,
        filteredCandidates: candidates,
      })
    );
  }

  searchedCandidates = (textInput) => {
    const newCandidate = this.state.candidates.filter((candidate) => {
      return candidate.name.toLowerCase().includes(textInput.toLowerCase());
    });
    this.setState({
      filteredCandidates: newCandidate,
    });
  };

  render() {
    return (
      <div>
        <SearchCandidate searchedCandidates={this.searchedCandidates} />
        <div>
          <div className="">
            {this.state.filteredCandidates.map((candidate, i) => (
              <CandidateSingle
                
                getName={this.props.getName}
                key={i}
                candidate={candidate}
              />
            ))}
          </div>
          <div>
            <button className="btn-large #008B8B" onClick={this.props.nextStep}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectCandidate;
