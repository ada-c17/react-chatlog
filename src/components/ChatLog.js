import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries, onUpdateChatData}) => {
  const messages = entries.map((message, index) => {
    return (
      <ChatEntry onUpdateChatData={onUpdateChatData} liked={message.liked} key={index} id={message.id} sender={message.sender} body={message.body} timeStamp={message.timeStamp}></ChatEntry>
    )
  })
  return (
    <div className='chat-log'>
      {messages}
    </div>
  )
}

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onUpdateChatData: PropTypes.func
};


export default ChatLog;