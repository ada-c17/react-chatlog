import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, incrementLikes, decrementLikes }) => {
  const chatEntries = entries.map((chatEntry) => (
    <ChatEntry
      key={chatEntry.id}
      sender={chatEntry.sender}
      timeStamp={chatEntry.timeStamp}
      body={chatEntry.body}
      incrementLikes={incrementLikes}
      decrementLikes={decrementLikes}
    />
  ));
  return <div>{chatEntries}</div>;
};

export default ChatLog;
