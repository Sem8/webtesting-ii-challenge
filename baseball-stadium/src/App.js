import React, { Component } from "react";
import "./App.css";
import Display from "./components/Display.js";
import Dashboard from "./components/Dashboard.js";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  };
  render() {
    return (
      <>
        <h2>Baseball Stadium</h2>

        <Display balls={this.state.balls} strikes={this.state.strikes} />

        <Dashboard
          onHit={this.hit}
          onFoul={this.foul}
          onStrike={this.strike}
          onBall={this.ball}
        />
      </>
    );
  }

  hit = () => {
    this.setState({ balls: 0 });
  };

  foul = () => {
    let { strikes } = this.state;
    if (strikes === 0) {
      this.setState({ strikes: 1 });
    }
    if (strikes == 1) {
      this.setState({ strikes: 2 });
    }
    if (strikes == 2) {
      this.setState({ strikes: 2 });
    }
    if (strikes > 2) {
      strikes += 2;
      this.setState({ strikes });
    }
  };

  strike = () => {
    let { strikes, balls } = this.state;
    if (strikes >= 2 || balls >= 3) {
      this.setState({ strikes: 0, balls: 0 });
    }
    strikes++;
    this.setState({ strikes });
  };

  ball = () => {
    let { strikes, balls } = this.state;
    if (strikes >= 2 || balls >= 3) {
      this.setState({ strikes: 0, balls: 0 });
    }
    balls++;
    this.setState({ balls });
  };
}

export default App;
