import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    return props.entries.map((entry) => {
            return (
                <section className="chat-log">
                <ChatEntry
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked} />
                </section>
            );
        })
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            // liked: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

export default ChatLog;