import React from 'react';

export default ({content}) => {
  return (
    <div className="level" key={content.id}>
      <div className={content.type == "MESSAGE" ? "level-left" : "level-right"}>
        <div className="level-item has-background-primary">
          {content}
          test
        </div>
      </div>
    </div>
  );
}
