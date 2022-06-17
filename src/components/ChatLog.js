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
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
