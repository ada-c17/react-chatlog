import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
  const chatEntries = entries.map((chatEntry) => (
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
