import React from 'react';

const Card = (props) => {
  return (<div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
    <img alt='Robots' src={`https://robohash.org/${props.id}`} width="250" height="250" />
    <div>
      <h2>
         {props.name}</h2>
       <p>{props.email}</p>
    </div>
  </div>);
}

export default Card;
