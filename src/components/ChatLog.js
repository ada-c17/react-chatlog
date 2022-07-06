import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map((entry) => {
        return (
            <ChatEntry
                key={entry.id}
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}>
                liked={entry.liked}
                changeLikes={props.changeLikes}
            </ChatEntry>
        );
    });
    return <div className="chat-messages">
        {chatEntryComponents}
    </div>
};

export default ChatLog;