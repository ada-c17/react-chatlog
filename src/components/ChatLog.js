import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({entries, onUpdateChatData}) => {
  const messagesData = entries.map((message, index) => {
    return (
      <ChatEntry
        onUpdateChat={onUpdateChatData}
        id={message.id}
        key={index+1}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        liked={message.liked}/>
    )
  })

  return (
    <section className="chat-log">
      {messagesData}
    </section>
  )
}

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      key: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  onUpdateChatData: PropTypes.func.isRequired,
};

export default ChatLog;
