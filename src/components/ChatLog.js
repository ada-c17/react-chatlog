import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const entryComponents = props.messageData.map((entries) => {
        // console.log(entries)
        return (
            <ChatEntry
            id = {entries.id}
            sender = {entries.sender}
            body = {entries.body}
            time = {entries.timeStamp}
            liked = {entries.liked}
            updateLikes = {props.updateLikes} 
            ></ChatEntry>
        );
    });
    return entryComponents
};

ChatLog.propTypes = {
    //Fill with correct proptypes
    messageData: PropTypes.arrayOf(PropTypes.object),
};

export default ChatLog;