import React from 'react';

const Card = ({id, name}) => {
  return (
    <div key={id}>
      <p>
        <b>{name}</b>
      </p>
    </div>
  );
}

export default Card;
