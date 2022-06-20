import './ChatLog.css';
import ChatEntry from './ChatEntry';
// import PropTypes from 'prop-types';

const ChatLog = ({entries}) => {
  const chatLogComponents = entries.map((chat) =>{
    return (
        <ChatEntry
          key={chat.id}
          sender={chat.sender}
          body={chat.body}
          timeStamp={chat.timeStamp}
        />
    );
  });

  return (
    <div>
      <ul>{chatLogComponents}</ul>
    </div>
  );
};

// ChatLog.propTypes={
//   entries: PropTypes.array.isRequired
// };

export default ChatLog;