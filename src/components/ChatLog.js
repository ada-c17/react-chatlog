import './ChatLog.css';
import ChatEntry from './ChatEntry'
import PropTypes from 'prop-types';
import React from 'react';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map((chatEntry) => {
        return (
            <ChatEntry
                key={chatEntry.id}
                id={chatEntry.id}
                sender={chatEntry.sender}
                body={chatEntry.body}
                timeStamp={chatEntry.timeStamp}
                liked={chatEntry.liked}
                likeCallback={props.likeCallback}
            />
        );
    });
    return (
    <div>
        {chatEntryComponents}
    </div>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired,
};

export default ChatLog;