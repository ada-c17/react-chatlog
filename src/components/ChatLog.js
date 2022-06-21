import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const ChatLogComponents = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onUpdate={props.onUpdateChatEntry}
      ></ChatEntry>
    );
  });
  return <section> {ChatLogComponents}</section>;
};

export default ChatLog;
