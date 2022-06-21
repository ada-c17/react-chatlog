import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map((entry) => {
        return (
        <ChatEntry id={entry.id} sender={entry.sender} body={entry.body}
        timeStamp={entry.timeStamp}></ChatEntry>
        );
    });
    return (
        <section class="chat-log">{chatEntryComponents}</section>
    )
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ChatLog;
