import React from 'react';
import ChatItem from './ChatItem.jsx';
import defaultChatItems from './defaultChat';

export default ({ items }) => {
  const chatItems = items || defaultChatItems.map((item) => <ChatItem key={item.id} content={item}/>);

  return (
    <div className="column is-three-quarters has-background-danger">
      <div className="container has-background-primary">
        <div className="container">
          <div className="list">
            { chatItems }
          </div>
        </div>
      </div>
    </div>
  );
}
