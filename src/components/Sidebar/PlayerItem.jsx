import React from 'react';

export default ({player}) => {
  return (
    <div className='list-item'>
      <div>
        {player.name}
      </div>
    </div>
  );
}
