import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((chatEntry) => {
    return (
      <section key={chatEntry.id}>
        <ChatEntry
          sender={chatEntry.sender}
          body={chatEntry.body}
          timeStamp={chatEntry.timeStamp}
        />
      </section>
    );
  });

  return <section className="chat-log">{chatEntries}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onUpdateLikeStatus: PropTypes.func.isRequired,
};

export default ChatLog;
