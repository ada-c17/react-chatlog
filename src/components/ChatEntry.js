import React from 'react';
import './ChatEntry.css';


const ChatEntry = (props) => {
  const onButtonClick = (id) => {
    console.log('onButtonClick')
    const updatedChat = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      liked: !props.liked,
      likeCount: props.likeCount 
    };
    props.onUpdateChat(updatedChat);
  };
  const displayLikes = props.liked ? '💜' : '🤍';

  return (
    <div className="chat-entry local">
      <h5>{props.likeCount}</h5>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body} ?</p>
          
        <p className="entry-time">{props.timeStamp}</p>
        
        <button onClick= {() => onButtonClick(props.id)} className="like">
            {displayLikes}
        </button>
      
      </section>
     
    </div>
  );
};

export default ChatEntry;
