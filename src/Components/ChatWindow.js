import React from 'react';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import './Style/ChatWindow.css'; // Ensure you have the styles imported

const ChatWindow = ({ messages, onSendMessage }) => (
  <div className="chat-window">
    {/* Add a welcome message at the top */}
    <div className="welcome-message">
      <h2>Welcome to the Nexus</h2>
    </div>
    {/* Messages section */}
    <div className="chat-messages">
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} message={msg} />
      ))}
    </div>
    {/* Input box */}
    <MessageInput onSendMessage={onSendMessage} />
  </div>
);

export default ChatWindow;
