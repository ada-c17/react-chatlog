import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const chatComponents = props.entries.map((chat, index) => {
        return(
            <section  key={index}>
            <ChatEntry 
                id={chat.id}
                sender={chat.sender} 
                body={chat.body} 
                timeStamp={chat.timeStamp}
                liked={chat.liked}
                onUpdate={props.onUpdateChat}
            />
            </section>
        );
    });
        
    return (
        <section>
            <ul>{chatComponents}</ul>;
        </section>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired
    })),
    onUpdateChat: PropTypes.func.isRequired
}; 

export default ChatLog;