import React from "react";
import CompanySingle from './CompanySingle';
import SearchCompanies from "./SearchCompanies"

class SelectCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfCompanies: [],
      filteredCompanies: [],
    };
  }
  searchCompanies = (event) => {
    const newCompany = this.state.listOfCompanies.filter((company) =>
      company.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({ filteredCompanies: newCompany });
  };

  componentDidMount() {
    const USER_ACCESS_TOKEN = JSON.parse(localStorage.getItem("token"));
      fetch("http://localhost:3333/api/companies",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + USER_ACCESS_TOKEN,
        },
      }
      )
      .then((res) => res.json())
      .then((companiesResponse) =>
        this.setState({
          listOfCompanies: companiesResponse,
          filteredCompanies: companiesResponse,
        })
      )
      .catch((error) => alert("Companies not found."));
  }
  render() {
    return (
      <div>
        <SearchCompanies searchCompanies={this.searchCompanies} />
        <div className="col">
          <div className="row"></div>
          {this.state.filteredCompanies.map((company, i) => (
            <CompanySingle
              key={i}
              getCompany={this.props.getCompany}
              company={company}
            />
          ))}
          <div>
            <button className="btn-large #008B8B" onClick={this.props.prevStep}>
              Back
            </button>
            <button className="btn-large #008B8B" onClick={this.props.nextStep}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default SelectCompany;
