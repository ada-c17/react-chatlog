import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const entries = props.entries;

    const chatEntries = entries.map((entry) => (
        <ChatEntry
        key={entry.id}
        // id={entry.id}
        sender={entry.sender}
        body={entry.body} 
        timeStamp={entry.timeStamp}/>
    ));
    return <div className="chat-log">{chatEntries}</div>
};

ChatLog.propTypes = {
    //Fill with correct proptypes
    entries:PropTypes.array.isRequired,
};

export default ChatLog;