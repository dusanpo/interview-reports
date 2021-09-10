import React from 'react'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
           email:"",
           password:""
        }
    }
    handleMail = (e) =>{
        this.setState({
        email: e.target.value
        });
    }
    
    handlePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
    }

    submitHandler = (e) =>{
        e.preventDefault();
        console.log(this.state);
        const payload = {
            email: this.state.email,
            password: this.state.password,
          };
          const USER_ACCESS_TOKEN = JSON.parse(localStorage.getItem("token"));
          console.log(USER_ACCESS_TOKEN)
          fetch('http://localhost:3333/login', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + USER_ACCESS_TOKEN
            },
            body: JSON.stringify(payload),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            localStorage.setItem(
                "token",
                JSON.stringify(data.accessToken)
              );
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }
    render(){
        const {email, password} = this.state;
        return(
            <div>
                <form onSubmit = {this.submitHandler}>

                    <input type="email"
                    value = {email}
                    onChange = {this.handleMail} />

                    <div>
                        <input type="password" 
                        value = {password}
                        onChange = {this.handlePassword} />
                    </div>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        
        )
    }
}

export default LoginPage
