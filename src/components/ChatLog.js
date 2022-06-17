import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
const ChatLog = ({
  entries,
  incrementLikes,
  decrementLikes,
  sender1,
  sender1Color,
  sender2Color,
}) => {
  const chatEntries = entries.map((chatEntry) => (
    <ChatEntry
      key={chatEntry.id}
      sender={chatEntry.sender}
      timeStamp={chatEntry.timeStamp}
      body={chatEntry.body}
      incrementLikes={incrementLikes}
      decrementLikes={decrementLikes}
      sender1={sender1}
      sender1Color={sender1Color}
      sender2Color={sender2Color}
    />
  ));
  return <div>{chatEntries}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  incrementLikes: PropTypes.func.isRequired,
  decrementLikes: PropTypes.func.isRequired,
  sender1: PropTypes.string.isRequired,
};

export default ChatLog;
