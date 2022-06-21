import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const onLiking = () => {
    const updatedMessage = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onClickLikeButton(updatedMessage);
  };
  const likedStatus = props.liked ? '❤️' : '🤍';
  const chatAlignment =
    props.sender === 'Estragon' ? 'chat-entry remote' : 'chat-entry local';

  return (
    <div className={chatAlignment}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button onClick={onLiking} className="like">
          {likedStatus}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onClickLikeButton: PropTypes.func,
};

export default ChatEntry;
