import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const chatComponents = props.entries.map(chat => {
        return(
            <ChatEntry sender={chat.sender} body={chat.body} timeStamp={chat.timeStamp}/>
        );
    });
        
    return (
        <section>
            <ul>{chatComponents}</ul>;
        </section>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object).isRequired,
}; 

export default ChatLog;