import React from 'react';
import './Style/MessageBubble.css';

const MessageBubble = ({ message }) => (
  <div className={`message-bubble ${message.sender}`}>
    <p>{message.text}</p>
  </div>
);

export default MessageBubble;
