import React, { Component } from "react";
import "./App.css";
import Display from "./components/Display.js";
import Dashboard from "./components/Dashboard.js";

class App extends Component {
  state = {    
      balls: 4,
      strikes: 0,    
  };
  render() {
    return (
      <>
        <h2>Baseball Stadium</h2>

        <Display
          balls={this.state.balls}
          strikes={this.state.strikes}
          
        />

        <Dashboard
        onHit={this.hit}
         />
      </>
    );
  }

  hit = () => {
    this.setState({ balls: 0 })
  };

  foul = () => {
    {this.state.strikes: 0} ? this.setState({ strikes: 1}) 
  }
}

export default App;
