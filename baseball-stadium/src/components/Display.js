import React from "react";

const Display = props => {
  //   if (props.balls >= 4 || props.strikes >= 3) {
  //      return (
  //          <>
  //         Balls: {props.balls === 0}
  //         Strikes: {props.strikes === 0}
  //         </>
  //      )
  //   }

  return (
    <>
      <h2>Display</h2>
      <div data-testid="balls-display">Balls: {props.balls}</div>
      <div data-testid="strikes-display">Strikes: {props.strikes}</div>
    </>
  );
};

export default Display;
