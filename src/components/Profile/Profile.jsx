import React from 'react';
const defaultPhoto = 'https://avatars3.githubusercontent.com/u/3691245?v=4';

export default ({}) => {
  return (
    <div className="level">
      <figure className="image is-96x96">
        <img className="is-rounded" src={defaultPhoto} alt="User Component" />
      </figure>
    </div>
  );
}
