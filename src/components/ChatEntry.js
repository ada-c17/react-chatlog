import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

// const studentComponents = studentData.map(student => {
//   return (
//       <li><Student name={student.nameData} email={student.emailData}></Student></li>
//   );
// });

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
