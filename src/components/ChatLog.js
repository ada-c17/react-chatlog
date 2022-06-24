import React from 'react';
import './ChatLog.css';
import './ChatEntry.css';
// import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({messages, onUpdateMessage}) => {
    // console.log(messages)


    const messageComponents = messages.map((message,index) => {
        return(
            <div key={message.id}>
                <ChatEntry 
                    id={message.id}
                    sender={message.sender} 
                    body={message.body} 
                    timeStamp={message.timeStamp}
                    liked={message.liked}
                    onUpdate={onUpdateMessage}
                ></ChatEntry>
            </div>
        )
    }); 

    return(
        <section>{messageComponents}</section>
    );
};

export default ChatLog;