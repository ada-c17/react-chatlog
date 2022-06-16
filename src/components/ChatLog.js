import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
const ChatLog = ({ entries, incrementLikes, decrementLikes }) => {
  const chatEntries = entries.map((chatEntry) => (
    <ChatEntry
      key={chatEntry.id}
      sender={chatEntry.sender}
      timeStamp={chatEntry.timeStamp}
      body={chatEntry.body}
      incrementLikes={incrementLikes}
      decrementLikes={decrementLikes}
    />
  ));
  return <div>{chatEntries}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  incrementLikes: PropTypes.func.isRequired,
  decrementLikes: PropTypes.func.isRequired,
};

export default ChatLog;
