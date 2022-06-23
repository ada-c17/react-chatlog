import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {

    const chatComponents = props.entries.map((entry) => {
        return (
            <ChatEntry
                id = {entry.id}
                key = {entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
                setLiked={props.setLiked}
            />
        );
    });
    return (
        <section className="chat-log">{chatComponents}</section>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default ChatLog;