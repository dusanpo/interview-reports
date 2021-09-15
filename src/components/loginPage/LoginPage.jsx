import React from "react";
import { withRouter } from 'react-router-dom';

import "./LoginPage.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleMail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    const payload = {
      email: this.state.email,
      password: this.state.password,
    };

    const USER_ACCESS_TOKEN = JSON.parse(localStorage.getItem("token"));
    console.log(USER_ACCESS_TOKEN);
    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        localStorage.setItem("token", JSON.stringify(data.accessToken));
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className = "row login">
      <div className = "col offset-s4 s4">
        <div className = "card">
          <div className = "card-action  white-text">
           <h3>Login Form</h3>
          </div>
          <form onSubmit = {this.submitHandler}>
          <div className = "card-content">
         <div className = "form-field">
           <label htmlFor="email">Email</label>
           <input type="email" value = {email} onChange = {this.handleMail} />
         </div><br />

         <div className = "form-field">
           <label htmlFor="password">Password</label>
           <input type="password" value = {password} onChange = {this.handlePassword} />
         </div><br />

         <div className = "form-field center-align">
       <button type = "submit" className = "btn-large #008B8B">Login</button>
         </div><br />
          </div>
        </form>
        </div>
      </div>
    </div>
    );
  }
}

export default withRouter(LoginPage);
