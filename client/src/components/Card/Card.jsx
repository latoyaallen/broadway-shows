import React from 'react';

const Card = ({id, name, isOnBroadway, isPlay, venue}) => {
  return (
    <div key={id}>
        <h1>{name}</h1>
        <p>{isPlay ? ' is a play ' : ' is a musical '}{isOnBroadway ? ' on Broadway' : ' off Broadway'} </p>
        <p>Playing at {venue}</p>
    </div>
  );
}

export default Card;
