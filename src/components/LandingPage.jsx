import React from "react";
import Main from "./Main";
import Search from "./Search"


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      query: ''
    };
  }

  componentDidMount() {
    const USER_ACCESS_TOKEN = JSON.parse(localStorage.getItem("token"));
    if(USER_ACCESS_TOKEN) {
    fetch("http://localhost:3333/api/candidates", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + USER_ACCESS_TOKEN,
      },
    })
      .then(
        (res) => res.json(),
        () => {
          localStorage.removeItem("token");
          return;
        }
      )
      .then((data) => {
        console.log(data);
        if (data && data.length > 0) {
          this.setState({
            isLoaded: true,
            items: data,
          });
        }
      });
    }
  }

  render() {
   
    if (!this.state.isLoaded) {
      return <div>Loading</div>;
    }
    const filteredUsers = this.state.items.filter(item => item.name.toLowerCase().includes(this.state.query.toLowerCase()));

    return (
      <div>
        <Search search={(q)=>this.setState(q)} query={this.state.query}/>
        <Main items={filteredUsers} />
      </div>
    );
  }
}
export default LandingPage;
