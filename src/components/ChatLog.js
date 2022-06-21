import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, togglesLikeCallback }) => {
  const chatComponents = entries.map((entry, index) => (
    <ChatEntry
      key={index}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
      liked={entry.liked}
      id={entry.id}
      togglesLikeCallback={togglesLikeCallback}
    />
  ));
  return (
    <div>
      <h2 className="ChatLog"> Our Chat Loggin flow</h2>
      {chatComponents}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  togglesLikeCallback: PropTypes.func,
};

export default ChatLog;
