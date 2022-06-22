import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const entryComponents = props.entries.map((entry) => {
            return (
                <ChatEntry
                key={entry.id}
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked} 
                toggleLike={props.toggleLike}
                />
            );
        });
    return <section className="chat-log">{entryComponents}</section>
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
        })
    ).isRequired,

    toggleLike : PropTypes.func.isRequired,
};

export default ChatLog;