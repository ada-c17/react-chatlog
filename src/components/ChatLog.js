import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries, updateLikeHeart}) => {
  const chatLogComponents = entries.map((entry) =>{
    return (
        <ChatEntry
          key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          updateLikeHeart={updateLikeHeart}

        />
    );
  });

  return (
    <div>
      <ul>{chatLogComponents}</ul>
    </div>
  );
};

ChatLog.propTypes={
  entries: PropTypes.array.isRequired,
  updateLikeHeart: PropTypes.func.isRequired 
};

export default ChatLog;