import React from 'react';
import Card from '../Card';

const ContentGrid = ({data}) => {
  return (
    <div>
      {data.map(show => (
        <Card
          id={show.id}
          name={show.name}
          isOnBroadway={show.isOnBroadway}
          isPlay={show.isPlay}
          venue={show.venue}
        />
      ))}
    </div>
  );
}

export default ContentGrid;
