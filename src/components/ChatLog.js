import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map((entry) => {
    return (
    <ChatEntry
        key ={entry.id}
        id = {entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        updateLikes={props.updateLikes}
        />
        );
    });
    return <div>{chatEntryComponents}</div>;
};

ChatEntry.propTypes = {
    entries:PropTypes.array.isRequired,
};

export default ChatLog;