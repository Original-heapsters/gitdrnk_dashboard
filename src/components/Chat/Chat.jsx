import React from 'react';
import ChatItem from './ChatItem.jsx';
import defaultChatItems from './defaultChat';

export default ({}) => {
  const chatItems = defaultChatItems.map((item) => <ChatItem key={item.id} content={item}/>);

  return (
    <div className="column is-three-quarters has-background-danger">
      <div className="container has-background-primary">
        <div className="container">
          <div className="list">
            {
              chatItems
            }
          </div>
        </div>
        <div className="container has-background-accent">
          <div className="level">
            <div className="level-item">
              <input type="text"/>
            </div>
            <div className="level-right has-background-primary">
              <input type="submit"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


  // {defaultChatItems.map((item) => {
  //   <div className="list-item">
  //     <ChatItem content={item}/>
  //   </div>
  // })}
