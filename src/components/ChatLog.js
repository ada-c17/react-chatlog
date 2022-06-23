import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const allMessages = props.entries.map((message) => {
    return (
      <ChatEntry
        key={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
      ></ChatEntry>
    );
  });
  return <section>{allMessages}</section>;
};

export default ChatLog;
