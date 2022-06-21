import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const handleLikedEntry = () => {
    props.likedCallback(props.id);
  };

  const contactsOrientation = props.contactsCallback(props.sender);

  return (
    <div className={`chat-entry ${contactsOrientation}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={handleLikedEntry}>
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.any,
  liked: PropTypes.bool,
  likedCallback: PropTypes.func,
  contactsCallback: PropTypes.func,
};

export default ChatEntry;
