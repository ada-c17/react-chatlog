import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const entryComponents = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        liked={entry.liked}
        timeStamp={entry.timeStamp}
        setLikeCallback={props.setLikeCallback}
        localColor={props.localColor}
        remoteColor={props.remoteColor}
      />
    );
  });
  return <div className="chat-log">{entryComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  setLikeCallback: PropTypes.func.isRequired,
  localColor: PropTypes.string.isRequired,
  remoteColor: PropTypes.string.isRequired,
};
export default ChatLog;
