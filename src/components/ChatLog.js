import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const chatMessages = props.entries.map((message) => {
        return (
            <ChatEntry
                key={message.id}
                id={message.id}
                sender={message.sender}
                body={message.body}
                timeStamp={message.timeStamp}
                likes={message.liked}
                heartsCallback={props.heartsCallback}>
            </ChatEntry>
        );
    }
    );
    return(
        <div>{chatMessages}</div>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired,
}
export default ChatLog;