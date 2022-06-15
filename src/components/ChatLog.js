import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntries = props.data.map((chatEntry) => (
    <ChatEntry
      key={chatEntry.id}
      sender={chatEntry.sender}
      timeStamp={chatEntry.timeStamp}
      body={chatEntry.body}
    />
  ));
  return <div>{chatEntries}</div>;
};

export default ChatLog;
