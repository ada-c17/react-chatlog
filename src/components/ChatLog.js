import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const ChatLog = (props) => {
    console.log(props)
    const chatComponents = props.entries.map((entry) => {
        return (
            <ChatEntry
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
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