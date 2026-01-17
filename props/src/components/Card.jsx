import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image}></img>
      <h1>{props.username}</h1>
      <p>Hello everyone, How are you all? Are you doing great? Great... NICE!</p>
      <button>Click Here</button>
    </div>
  )
}

export default Card;