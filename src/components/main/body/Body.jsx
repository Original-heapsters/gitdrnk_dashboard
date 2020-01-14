import React from 'react';
import Sidebar from '../../Sidebar/Sidebar.jsx';
import Chat from '../../Chat/Chat.jsx';

const Body = () => (
    <div className="section">
      <div className="container">
        <div className="columns">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </div>
);

export default Body;
