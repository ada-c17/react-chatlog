import { React } from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onLikeMessage }) => {
  const chatComponents = entries.map((entry) => {
    return (
      <ul key={entry.id}>
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          isLiked={entry.liked}
          id={entry.id}
          onLikeMessage={onLikeMessage}
        />
      </ul>
    );
  });
  return <ul>{chatComponents}</ul>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      onLikeMessage: PropTypes.func.isRequired,
    })
  ),
};

export default ChatLog;
