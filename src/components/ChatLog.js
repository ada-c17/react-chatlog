import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const entryComponents = props.entries.map((entry) => {
    // console.log(entry.id);
    return (
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
      />
    );
  });
  return <div className="chat-log">{entryComponents}</div>;
};

export default ChatLog;
