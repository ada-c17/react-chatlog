import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';

const ChatLog = ({ entries, changeLikeButton }) => {
  // console.log(messages);
  // const messageComponents = [
  //   <ChatEntry
  //     sender={messages.sender}
  //     time={messages.timeStamp}
  //     body={messages.body}
  //   ></ChatEntry>,
  // ];

  const messageComponents = [];
  for (const message of entries) {
    // console.log(message);

    messageComponents.push(
      <ChatEntry
        key={message.id}
        id={message.id}
        sender={message.sender}
        timeStamp={message.timeStamp}
        body={message.body}
        changeLikeButton={changeLikeButton}
        liked={message.liked}
      ></ChatEntry>
    );
  }

  return <div>{messageComponents}</div>;
};
// };
// };

export default ChatLog;
