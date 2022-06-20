import ChatEntry from './ChatEntry';
// import PropTypes from 'react';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((entry) => {
    return (
      <div key={entry.id}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onUpdateLike={props.onUpdateLike}
          onHeartClicks={props.onHeartClicks}
        ></ChatEntry>
      </div>
    );
  });

  return <section className="chat-log">{chatEntryComponents}</section>;
};

// ChatLog.propTypes = {
//   entries: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       sender: PropTypes.string,
//       body: PropTypes.string,
//       timeStamp: PropTypes.string,
//       liked: PropTypes.bool,
//     })
//   ),
//   onUpdateLike: PropTypes.func,
// };

export default ChatLog;
