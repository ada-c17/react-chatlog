import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  // console.log(props);
  // console.log(props.sender);

  const calculateYearsPassed = () => {
    const thisYear = 2022;
    const messageYear = parseInt(props.timeStamp.slice(0, 4));

    return thisYear - messageYear;
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{calculateYearsPassed()} years ago</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
