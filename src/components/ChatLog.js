import ChatEntry from './ChatEntry';
//import chatMessages from './data/messages.json';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  console.log(props);
  const chatLogComponents = [];
  for (let object of props.entries) {
    chatLogComponents.push(
      <ChatEntry
        sender={object.sender}
        body={object.body}
        timeStamp={object.timeStamp}
      />
    );
  }

  return chatLogComponents;
};

ChatLog.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ChatLog;
