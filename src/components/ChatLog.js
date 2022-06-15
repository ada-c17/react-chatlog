// import Proptypes from 'prop-types';
import ChatEntry from './ChatEntry';
const ChatLog = (props) => {
  const entries = props.chatMsg;
  // console.log(entries);
  
   const chatLogsComponents = entries.map((entry) => 
   (<ChatEntry key={entry.id} id={entry.id} sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} liked={entry.liked} />)
   )

   return (
     <div>
         {chatLogsComponents}
     </div>
   )
}

// ChatLog.propTypes = {
//   entries: Proptypes.array.isRequired,
// }

export default ChatLog;