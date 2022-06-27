import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

// {
//   "id": 1,
//   "sender":"Vladimir",
//   "body":"why are you arguing with me",
//   "timeStamp":"2018-05-29T22:49:06+00:00",
//   "liked": false
// }


function getDifferenceInYears(timeStamp) {
  // key={timeStamp}
  const today = new Date();
  const year = today.getFullYear();

  const pastDay = new Date(timeStamp);
  const pastYear = pastDay.getFullYear();

  const difference = year - pastYear;
  return difference;
}

const ChatEntry = (props) => {
  // console.log(props)
  const timeInYears = getDifferenceInYears(props.timeStamp) + ' years ago';

  const onLikeButtonClick = () => {
    const updatedMessage = {
        id: props.id,
        sender: props.sender,
        body: props.body,
        timeStamp: props.timeStamp,
        liked: !props.liked
    };

    // Invoke the function passed in through the prop named "onUpdate"
    // This function is referenced by the name "updateStudentData" in App
    props.onUpdateChatData(updatedMessage);
  };

  // className stuff here
  // const likeButton = props.liked ? 'presentblue' : 'absentviolet';

  return (
    // <div className="chat-entry local">
    <div className={props.sender==='Vladimir'?'chat-entry local':'chat-entry remote'}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{timeInYears}</p>
        <button onClick={onLikeButtonClick} className="like">{!props['liked']?'🤍':'💙'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onUpdateChatData: PropTypes.func
};

export default ChatEntry;
