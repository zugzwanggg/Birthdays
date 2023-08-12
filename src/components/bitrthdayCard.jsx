import React from "react";

function Card(props) {

  return (
    <div className="card">
      <img src={props.img} alt="" />
      <div className="card-info">
        <p>{props.name}</p>
        <small>{props.yearOld} years</small>
      </div>
    </div>
  )
}

export default Card