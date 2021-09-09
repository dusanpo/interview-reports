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
