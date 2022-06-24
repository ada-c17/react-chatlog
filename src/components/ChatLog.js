import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatLogComponent = props.entries.map((log) => {
    return (
      <div key={log.id}>
        <ChatEntry
          id={log.id}
          sender={log.sender}
          body={log.body}
          timeStamp={log.timeStamp}
          liked={log.liked}
          likedCallBack={props.likedCallBack}
          userLocal={props.userLocal}
          userState={props.userState}
          displayColor={props.displayColor}
        />
      </div>
    );
  });
  return chatLogComponent;
};

ChatLog.protoTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  likedCallBack: PropTypes.func.isRequired,
  userLocal: PropTypes.func.isRequired,
};

export default ChatLog;
