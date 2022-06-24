import React, {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, onUpdate}) => {
  const [like, setLike] = useState(false);
  const heartFill = like === true?  '❤️': '🤍';
  
  const upDate=(e)=>{
    console.log(e.target.innerHTML);
    onUpdate(id)
    setLike(!like)
  }
  //const like = liked?  '🤍': '❤️';
  // const [like, setLike] = useState(liked);
  // const heartFill = like === true ? '❤️' : '🤍';

  //const passTime= 2022 - timeStamp.getYear();
  return (
    <div className="chat-entry local" key={id}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>
          {body}
        </p>
        
        <p className="entry-time"><TimeStamp time={timeStamp}></TimeStamp></p>
        <button className='like' onClick={upDate}>{heartFill}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onUpdate: PropTypes.func,
};

export default ChatEntry;
