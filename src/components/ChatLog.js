import React from 'react';
import './ChatLog.css';
import './ChatEntry.css';
// import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

// changed for entries to props to see if this was the bug
const ChatLog = (entries) => {
    const messageComponents = entries.messages.map((message,index) => {
        return(
            <div key={message.id}>
                <ChatEntry 
                    id={message.id}
                    sender={message.sender} 
                    body={message.body} 
                    timeStamp={message.timeStamp}
                    liked={message.liked}
                    onUpdate={entries.onUpdateMessage}
                ></ChatEntry>
            </div>
        )
    }); 

    return(
        <section>{messageComponents}</section>
    );
};

export default ChatLog;