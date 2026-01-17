import React from 'react';

const Card = (props) => {
  return (
    // <div className="parent">
      <div className="card">
        <div className="cardHeader">
          <img src={props.image}></img>
          <h2>{props.name}</h2>
        </div>
        <div className="cardBody">
          <p>{props.desc}</p>
        </div>
        <div className='priceBuy'>
          <h2>$110</h2>
          <button>Buy Now</button>
        </div>
      </div>
    /* </div> */
  )
}

export default Card;