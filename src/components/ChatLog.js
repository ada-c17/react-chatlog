import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onUpdate }) => {
  return entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onUpdate={onUpdate}
      />
    );
  });
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string,
      id: PropTypes.number.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  onUpdate: PropTypes.func.isRequired,
};

export default ChatLog;
