import React from "react";
import Main from "./Main";


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
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
    return (
      <div>
        <Main items={this.state.items} />
      </div>
    );
  }
}
export default LandingPage;
