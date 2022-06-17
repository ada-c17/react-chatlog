import { React } from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ({ entries }) => {
  return (
    <ul>
      {entries.map(entry => {
        return (
          <ChatEntry
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
          />
        );
      })}
    </ul>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    })
  ),
};

export default ChatLog;
