import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onUpdate, localName, localColor, remoteColor }) => {
  return entries.map((entry, index) => {
    return (
      <ChatEntry
        key={index}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        localName={localName}
        localColor={localColor}
        remoteColor={remoteColor}
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
      timeStamp: PropTypes.string.isRequired,
      id: PropTypes.number,
      liked: PropTypes.bool,
    })
  ),
  localName: PropTypes.string,
  localColor: PropTypes.string,
  remoteColor: PropTypes.string,
  onUpdate: PropTypes.func,
};

export default ChatLog;
