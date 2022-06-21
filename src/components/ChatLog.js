import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatLogComponents = [];
  for (let object of props.entries) {
    chatLogComponents.push(
      <ChatEntry
        sender={object.sender}
        body={object.body}
        timeStamp={object.timeStamp}
        id={object.id}
        key= {object.id} //setting key the same value as id
        liked={object.liked}
        heartCallback={props.heartCallback}
      />
    );
  }

  return chatLogComponents;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
