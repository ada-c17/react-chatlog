import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
  console.log('entries', entries);
  const chatComponents = entries.map((entry, index) => (
    <ChatEntry
      key={index}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
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
};

export default ChatLog;
