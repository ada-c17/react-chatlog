import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
const ChatLog = ({
  entries,
  sender1,
  sender1Color,
  sender2Color,
  updateLikes,
}) => {
  const chatEntries = entries.map((chatEntry) => (
    <ChatEntry
      key={chatEntry.id}
      id={chatEntry.id}
      sender={chatEntry.sender}
      timeStamp={chatEntry.timeStamp}
      body={chatEntry.body}
      liked={chatEntry.liked}
      sender1={sender1}
      sender1Color={sender1Color}
      sender2Color={sender2Color}
      updateLikes={updateLikes}
    />
  ));
  return <div>{chatEntries}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  sender1: PropTypes.string.isRequired,
  updateLikes: PropTypes.func.isRequired,
  sender1Color: PropTypes.string.isRequired,
  sender2Color: PropTypes.string.isRequired,
};

export default ChatLog;
