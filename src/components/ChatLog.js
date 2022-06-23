import { React } from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatMessageArray = props.chatsMessages.map((chat) => {
    return (
      <ChatEntry
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        id={chat.id}
        key={chat.id}
        liked={chat.liked}
        onChangeLike={props.onChangeLike}
      />
    );
  });
  return chatMessageArray;
};

ChatLog.propTypes = {
  chatsMessages: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeLike: PropTypes.func.isRequired,
};

export default ChatLog;
