import React from 'react';

export default ({content}) => {
  return (
    <div className="list-item">
      <div className="level">
        <div className="level-left">
          { content.type == 'MESSAGE' && content.text }
        </div>
        <div className="level-right">
          { content.type == 'ACTION' && content.text }
        </div>
      </div>
    </div>
  );
}
