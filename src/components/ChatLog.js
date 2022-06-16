import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const entryComponents = props.entries.map((entry) => {
    return (
      <div>
        <ChatEntry
          key={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        />
      </div>
    );
  });
  return <div className="chat-log">{entryComponents}</div>;
};

export default ChatLog;
