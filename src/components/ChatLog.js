import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries, id, liked, onUpdateMessage }) => {

    return (
        <ul>
            {entries.map(chat => {
                return (
                    <ChatEntry
                        sender={chat.sender}
                        body={chat.body}
                        timeStamp={chat.timeStamp}
                        id={chat.id}
                        isLiked={chat.liked}
                        onUpdateMessage={onUpdateMessage}
                    />
                );
            })}
        </ul>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            sender: PropTypes.string,
            body: PropTypes.string,
            timeStamp: PropTypes.string,
            id: PropTypes.number.isRequired,
            liked: PropTypes.bool.isRequired,
            onUpdateMessage: PropTypes.func.isRequire

        })
    )
}

export default ChatLog;