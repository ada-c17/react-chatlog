import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {

  // const chatFormat = (props) => {
  // //   if props.sender == 'Estragon', make css header .chat-entry.remote
  //   if (props.sender === 'Estragon') {
  //     return <div className="chat-entry remote"></div>;
  //   }
  //   else {
  //     return <div className="chat-entry local"></div>;
  //   }
  // };

  // const chatFormat = () => (
  //   <div 
  //     className={`chat-entry ${props.sender === 'Estragon' ? 'remote' : 'local'}`}></div>);
  
  return (
    // <div className={chatFormat}>
    <div className={`chat-entry ${props.sender === 'Estragon' ? 'remote' : 'local'}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propType = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
