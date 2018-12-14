import React, { Component } from 'react';
import './App.css';
import Boxes from './DisplayBoxes.js'
import SubmitForm from './ContactForm.js'

class App extends Component {
  state = {
    isOn: true
  }


  handleClick = () => {
    this.setState({isOn:!this.state.isOn})
  }


  render() {
    return (
      console.log(this.state.isOn),
      <div className="App">
        <header className="App-header"></header>
        <div className ="App-text">
          <h1>
            Hi! I'm Kellyn Barnes, A front-end JavaScript Developer
             <br/ > ready to GASLIGHT any project
          </h1>
          <div> {!this.state.isOn ? <Boxes/> : null}</div> 
          <button onClick={this.handleClick} style={{display: this.state.isOn ? 'inherit' : 'none' }}>Click Me</button>
        </div>
        <section className = "Contact-page">
            <h1 className="Contact-text">CONTACT</h1>
            <SubmitForm />
        </section>
      </div>
    );
  }
}

export default App;
