import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((entry) => {
    return (
      <div key={entry.id}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        ></ChatEntry>
      </div>
    );
  });

  return <section className="chat-log">{chatEntryComponents}</section>;
};

export default ChatLog;
