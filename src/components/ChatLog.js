import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatData = props.entries;
  const toggleLikes = props.toggleLikes;

  const chatComponents = chatData.map((chat) => {
    return (
      <ChatEntry
        key={chat.id}
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked={chat.liked}
        toggleLikes={toggleLikes}
      />
    );
  });

  return <div>{chatComponents}</div>;
};

ChatLog.propTypes = {
  // chatData: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     sender: PropTypes.string.isRequired,
  //     body: PropTypes.string.isRequired,
  //     timeStamp: PropTypes.string.isRequired,
  //     liked: PropTypes.bool.isRequired,
  //   })
  // ).isRequired,

  entries: PropTypes.array.isRequired,
  toggleLikes: PropTypes.func.isRequired,
};

export default ChatLog;
