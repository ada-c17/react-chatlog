import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, toggleLike }) => {
  const ChatEntryComponents = entries.map((entry, i) => (
    <ChatEntry key={i} {...entry} toggleLike={toggleLike} />
  ));
  return <div className="chat-log">{ChatEntryComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      // liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  // toggleLike: PropTypes.func.isRequired,
};

export default ChatLog;
