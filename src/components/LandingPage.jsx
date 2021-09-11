import React from 'react'
import Header from './partials/Header'
import Main from './Main'
import Footer from './partials/Footer'

class LandingPage extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        items: [],
        isLoaded: false
      }
    }
    
  componentDidMount(){
    const USER_ACCESS_TOKEN = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:3333/api/candidates",{
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + USER_ACCESS_TOKEN
      }
  
    })
   
    .then(res => res.json())
    .then(data => {
      console.log(data);
        this.setState({
          isLoaded: true,
          items: data
        })
    });
  }
     
    render(){
const{isLoaded} = this.state;
   if(!isLoaded){
     return <div>Loading</div>
   }
    return (
        <div>
            <Header/>
            <Main items = {this.state.items}/>
            <Footer/>
        </div>
    )
}
}
export default LandingPage
