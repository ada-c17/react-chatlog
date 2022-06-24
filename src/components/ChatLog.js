import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const messageComponents = props.entries.map((message) => {
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
  return <section>{messageComponents}</section>;
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
};

export default ChatLog;
