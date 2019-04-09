import React from 'react'

const Dashboard = (props) => {
  return (
    <>
    <h2>Dashboard</h2>

    <button>Strike</button>
    <button>Ball</button>
    <button>Foul</button>
    <button onClick={props.onHit}>Hit</button>
    </>
  )
};

export default Dashboard
