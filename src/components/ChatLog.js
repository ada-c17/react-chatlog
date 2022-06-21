import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const chatMessageComponents = props.entries.map((entry) => {
        return (
            <ChatEntry
                key={entry.id}
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
            />
        );
    });

    return(
        <div>{chatMessageComponents}</div>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired,
};

export default ChatLog;
