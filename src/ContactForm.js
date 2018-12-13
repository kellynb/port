import React, { Component } from 'react';
import './App.css';
import './App.js';


class SubmitForm extends Component {
    state = {
         name: '',
         email: '',
         message: '',
         personArr: []        
    }

    handleName = event => {
        this.setState({name: event.target.value})
    }

    handleEmail = event => {
        this.setState({email: event.target.value})
    }

    handleMessage = event => {
        this.setState({message: event.target.value})
    }

    handleSubmit = event => {
        const newPerson = {
            id: this.state.personArr.length +1,
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        this.state.personArr.push(newPerson)

        this.setState({
            personArr: [...this.state.personArr],
            name:'',
            email:'',
            message: '',
        })

        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
              <input value={this.state.name} onChange={this.handleName}/>
              <input  value={this.state.email} onChange={this.handleEmail}/>
              <textarea value={this.state.message} onChange={this.handleMessage}/>
              <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default SubmitForm