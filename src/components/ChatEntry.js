import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ sender, body, timeStamp, id, isLiked, onLikeMessage }) => {
  const chatStyle =
    sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  const onLikeClick = () => {
    // On click, this function is called, which calls on the prop and passes in student Id
    onLikeMessage({
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      id: id,
      liked: !isLiked,
    }); // Instead of passing Id, we are passing a new object to represent entry
  };

  const heart = isLiked ? '❤️' : '🤍';

  return (
    <div className={chatStyle}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={onLikeClick}>
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  onLikeMessage: PropTypes.func.isRequired,
};

export default ChatEntry;
