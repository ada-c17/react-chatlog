import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
const ChatLog = (props) => {
  const entries = props.chatMsg;
  // console.log(entries);
  
   const chatLogsComponents = entries.map((entry) => 
   (<ChatEntry 
      key={entry.id} 
      id={entry.id} 
      sender={entry.sender} 
      body={entry.body} 
      timeStamp={entry.timeStamp} 
      liked={entry.liked} 
      likedEvent={props.likedEvent}
      // countLikesFunc={props.countLikesFunc}
      // setColorFunc={props.setColorFunc}
      />)
   )


   return (
     <div>
         {chatLogsComponents}
     </div>
   )
};

ChatLog.propTypes = {
  chatMsg: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  likedEvent: PropTypes.func.isRequired,
  // countLikesFunc: PropTypes.func.isRequired,
  // setColorFunc: PropTypes.func.isRequired
  };

export default ChatLog;