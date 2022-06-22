import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onUpdate={props.onUpdateChat}
        localTextColor={props.onUpdateLocal}
        remoteTextColor={props.onUpdateRemote}
      ></ChatEntry>
    );
  });
  return <section className="chat-log">{chatEntries}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onUpdateChat: PropTypes.func.isRequired,
};

export default ChatLog;
