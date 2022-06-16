import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

function ChatLog(props) {
  const chatComponents = props.entries.map((entry)=>{
    return (
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
      />
    );
  });
  return (
    <div>
      {chatComponents}
    </div>
  );  
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;