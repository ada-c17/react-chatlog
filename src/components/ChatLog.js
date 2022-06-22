import React from 'react';
import ChatEntry from './ChatEntry.js';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((entry) => {
    // console.log('in chatlog');
    // console.log(props.liked);
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        updateLikesCallback={props.updateLikesCallback}
        // addLikesCallback={props.addLikesCallback}
        // removeLikesCallback={props.removeLikesCallback}
        // updateEmojiRed={props.updateEmojiRed}
        // updateEmojiWhite={props.updateEmojiWhite}
        liked={entry.liked}
        senderLocal={props.senderLocal}
        senderRemote={props.senderRemote}
        emoji={props.emoji}
      />
    );
  });

  return <div>{chatComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};
export default ChatLog;
