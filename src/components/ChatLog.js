import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatData = props.chatData;

  const chatComponents = chatData.map((chat) => (
    <ChatEntry
      key={chat.id}
      sender={chat.sender}
      body={chat.body}
      timeStamp={chat.timeStamp}
      liked={chat.liked}
    />
  ));

  return <div>{chatComponents}</div>;
};

ChatLog.propTypes = {
  chatData: PropTypes.array.isRequired,
};

export default ChatLog;
