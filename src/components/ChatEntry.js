import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState} from 'react';

const ChatEntry = (props) => {
  const[isLiked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked(!isLiked);
  }

  const like = isLiked ? '❤️': ' 🤍 ';
  
  class LikeButton extends React.Component{
    state = {
      likes:0
    };
    render() {
      return <button> Likes: {this.state.likes}</button>
    }
  }

  const addLike = () => {
    let newCount = this.state.likes +1;
    this.setState({
      likes: newCount
    });
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time = {props.timeStamp}/></p>
        <h2 onClick={() => setLiked((prevLike) => ! prevLike)}>
        {like}
        </h2>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,

};

export default ChatEntry;
