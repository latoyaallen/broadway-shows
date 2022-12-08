import React from 'react';

const Card = ({id, name, isOnBroadway, isPlay, venue}) => {
  return (
    <div key={id}>
      <p>
        <b>{name}</b>
      </p>
    </div>
  );
}

export default Card;
