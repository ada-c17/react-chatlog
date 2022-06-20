import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';


const ChatLog = (props) => {
    const chatComponentsArray = props.entries.map((entry) => {
        return (
            <ChatEntry 
            key={entry.id} 
            id={entry.id}
            body={entry.body}
            sender={entry.sender}
            timeStamp = {entry.timeStamp}
            liked = {entry.liked}
            toggleLike = {props.toggleLike}
            />
    );
    });
    return (
        <div>{chatComponentsArray}</div>) 
};

ChatLog.propTypes = {
    entry: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleLike: PropTypes.func.isRequired
};

export default ChatLog;
