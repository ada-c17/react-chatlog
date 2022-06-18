import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const ChatLog = (entries) => {
    const chatComponents = entries.chatData.map((chatEntry) => {
        return (
            <ChatEntry
                sender={chatEntry.sender}
                body={chatEntry.body}
                timeStamp={chatEntry.timeStamp}
            />
        );
    });
    return (
        <section className="chat-log">{chatComponents}</section>
    );
};


ChatLog.propTypes = {
    chatData: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default ChatLog;