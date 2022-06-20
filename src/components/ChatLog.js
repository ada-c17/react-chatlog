import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

function ChatLog(props) {
  const chatComponents = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        liked={entry.liked}
        timeStamp={entry.timeStamp}
        likedCallback={props.likedCallback}
        // likes={props.likes}
      />
    );
  });
  return <div>{chatComponents}</div>;
}

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
