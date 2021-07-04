import React, { Component } from "react";
import './login.css';
export default class Login extends Component {
  
    constructor(props){
        super(props)
        this.state = {email: "" , password: ""}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log(event)
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value
    });

      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render() {
    return (
      <div className="content"  >
        <form onSubmit={this.handleSubmit}>

            <input required placeholder="Email*" className="form-email" type="text" name="email" value={this.state.email} onChange={ this.handleChange}/> 
            <input required placeholder="Password*" className="form-password" type="password" name="password" value={this.state.password} onChange={ this.handleChange}/> 

            <input className="login-button" type="submit" value="Login" />

        </form>
      </div>
    );
  }
}
