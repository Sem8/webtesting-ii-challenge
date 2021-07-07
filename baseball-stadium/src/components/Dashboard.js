import React from "react";

const Dashboard = props => {
  return (
    <>
      <h2>Dashboard</h2>

      <button data-testid="strike-button" onClick={props.onStrike}>
        Strike
      </button>
      <button data-testid="ball-button" onClick={props.onBall}>
        Ball
      </button>
      <button data-testid="foul-button" onClick={props.onFoul}>
        Foul
      </button>
      <button data-testid="hit-button" onClick={props.onHit}>
        Hit
      </button>
    </>
  );
};

export default Dashboard;
