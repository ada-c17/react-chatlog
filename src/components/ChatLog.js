import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, setLikedCallback }) => {
  // console.log('entrie: ', entries);

  const chatComponents = entries.map((chat) => {
    return (
      <ChatEntry
        key={chat.id}
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        // liked={chat.liked}
        setLikedCallback={setLikedCallback}
      />
    );
  });
  return (
    <div>
      <h2 className="chat-log">{chatComponents} </h2>
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  setLikedCallback: PropTypes.func.isRequired,
};

export default ChatLog;
