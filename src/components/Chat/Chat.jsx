import React from 'react';
import ChatItem from './ChatItem.jsx';
const defaultChatItems = [
  {
    id: 1,
    type: "MESSAGE",
    timestamp: "01/01/2020 01:01:01PM",
    text: "Chat message 1",
    user: "User stuff",
  },
  {
    id: 2,
    type: "ACTION",
    timestamp: "01/01/2020 01:01:01PM",
    text: "Action message 1",
    user: "User stuff",
  },
  {
    id: 3,
    type: "MESSAGE",
    timestamp: "01/01/2020 01:01:01PM",
    text: "Chat message 2",
    user: "User stuff",
  },
  {
    id: 4,
    type: "MESSAGE",
    timestamp: "01/01/2020 01:01:01PM",
    text: "Chat message 3",
    user: "User stuff",
  },
  {
    id: 5,
    type: "ACTION",
    timestamp: "01/01/2020 01:01:01PM",
    text: "Action message 2",
    user: "User stuff",
  },
];
export default ({}) => {
  const chatItems = defaultChatItems.map((item) => <ChatItem content={item}/>);

  return (
    <div className="column is-three-quarters has-background-danger">
      <div className="container has-background-primary">
        <div className="container">
          {defaultChatItems.map((item) => {<ChatItem content={item}/>)});}
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
