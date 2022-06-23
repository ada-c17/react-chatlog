import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatEntryComp = props.entries.map((chatMessage, index) => {
    // const updateMessage = (updatedMessage) => {
    //   //update only the current message
    //   const allMessages = [...props.messages];
    //   allMessages[index] = updatedMessage;
    //   props.setMessages(allMessages);
    // };
    return (
      <li key={index}>
        <ChatEntry
          id={chatMessage.id}
          sender={chatMessage.sender}
          body={chatMessage.body}
          timeStamp={chatMessage.timeStamp}
          liked={chatMessage.liked}
          heartToggling={props.heartToggling}
        ></ChatEntry>
      </li>
    );
  });
  return (
    <section>
      <ul>{chatEntryComp}</ul>
    </section>
  );
};

ChatLog.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ),
  heartToggling: PropTypes.func.isRequired,
};

export default ChatLog;
