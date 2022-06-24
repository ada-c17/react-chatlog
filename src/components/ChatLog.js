import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const messages = props.entries.map((message) => {
    return (
      <ChatEntry
        key={message.id}
        id={message.id}
        sender={message.sender}
        body={message.body}
        liked={message.liked}
        timeStamp={message.timeStamp}
        onToggleHeartStatus={props.onToggleHeartStatus}
      ></ChatEntry>
    );
  });
  return <section>{messages}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  onToggleHeartStatus: PropTypes.func.isRequired,
};

export default ChatLog;
