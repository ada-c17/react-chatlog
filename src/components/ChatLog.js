import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js'

const ChatLog = ({entries, updateLikes, updateHearts}) => {
    const chatEntries = entries.map((entry, key) => {
        return (
            <div key={entry.id}>
                <ChatEntry 
                    id={entry.id} 
                    sender={entry.sender} 
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                    updateLikes={updateLikes}
                    updateHearts={updateHearts}
                ></ChatEntry>
            </div>
        )
    });

    return (
        <div>
            <div>{chatEntries}</div>
        </div>
    )
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired
    })),
    updateLikes: PropTypes.func.isRequired,
    updateHearts: PropTypes.func.isRequired
}

export default ChatLog;