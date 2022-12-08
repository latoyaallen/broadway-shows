import React from 'react';
import Card from '../Card';

const ContentGrid = ({data}) => {
  return (
    <div>
      {data.map(show => (
        <Card
          id={show.id}
          name={show.name}
        />
      ))}
    </div>
  );

}

export default ContentGrid;
