import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, updateLikeHeart}) => {
  const chatLogComponents = entries.map((entry, uniqueId) =>{
    return (
      <div className="chat-log" key={uniqueId} >
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          updateLikeHeart={updateLikeHeart}
        />
      </div>
    );
  });

  return chatLogComponents;
};


export default ChatLog;