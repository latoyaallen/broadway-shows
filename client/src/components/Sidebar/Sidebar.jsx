import React from 'react';
import Button from '../Button';

const handleOnClick = () => {
  console.log('it blends!');
}

const Sidebar = () => {
  return (
    <div>
      <Button
        onClick={handleOnClick}
      >
        All Shows
      </Button>
      <Button
        onClick={handleOnClick}
      >
        Broadway
      </Button>
      <Button
        onClick={handleOnClick}
      >
        Off Broadway
      </Button>
      <Button
        onClick={handleOnClick}
      >
        Plays
      </Button>
      <Button
        onClick={handleOnClick}
      >
        Musicals
      </Button>
  </div>
  )
}

export default Sidebar;
