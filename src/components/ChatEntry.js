import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  console.log(props);
  return (
    <div className="chat-entry local" key={props.Log.id}>
      <h2 className="entry-name">
        {props.Log['sender']}
        {/*Replace with name of sender*/}
      </h2>
      <section className="entry-bubble">
        <p>
          {props.Log['body']}
          {/*Replace with body of ChatEntry*/}
        </p>
        <p className="entry-time">
          {props.Log['timeStamp']}
          {/*Replace with TimeStamp component*/}
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
