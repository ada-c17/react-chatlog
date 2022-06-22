import React,{ useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';


const ChatEntry = (props) => {

  const [like, setLike] = useState(0);
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className='entry-time'>
          <TimeStamp time={props.timeStamp}/>
        </p>
        <button className="like" onClick={()=> props.updateLikes(like, setLike)}>
          {like ?'❤️':'🤍'} 
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string,
};

export default ChatEntry;
