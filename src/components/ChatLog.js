import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
const ChatLog = (props) => {
  const entries = props.entries;
  
   const chatLogsComponents = entries.map((entry) => 
   (<ChatEntry 
      key={entry.id} 
      id={entry.id} 
      sender={entry.sender} 
      body={entry.body} 
      timeStamp={entry.timeStamp} 
      liked={entry.liked} 
      likedEvent={props.likedEvent}
      />)
   )


   return (
     <div>
         {chatLogsComponents}
     </div>
   )
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  likedEvent: PropTypes.func.isRequired,
  };

export default ChatLog;