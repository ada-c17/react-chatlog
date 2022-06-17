import './ChatLog.css';
import ChatEntry from './ChatEntry';
// import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatLogComponents = props.entries.map((chat, id) =>{
    return (
      <div key={id}>
        <ChatEntry
          sender={chat.sender}
          body={chat.body}
          timeStamp={chat.timeStamp}
        />
      </div>
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