import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const entryComponents = props.messageData.map((entries) => {
        // console.log(entries)
        return (
            // <div className="chat-entry local">
            // <h2 className="entry-name">{props.sender}</h2>
            // <section className="entry-bubble">
            // <p>{props.body}</p>
            // <p className="entry-time"><TimeStamp time = {props.timeStamp}/></p>
            // <button className="like">🤍</button>
            // </section>
            // </div>
            <ChatEntry
            sender = {entries.sender}
            body = {entries.body}
            time = {entries.timeStamp}
            ></ChatEntry>
        );
    });
    return entryComponents
};

ChatLog.propTypes = {
    //Fill with correct proptypes
    messageData: PropTypes.arrayOf(PropTypes.object),
};

export default ChatLog;