import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const ChatLog = (props) => {
    const chatComponents = props.entries.map((entry) => {
        return (
        <div key={entry.id}>    
            <ChatEntry
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            liked={entry.liked}
            heartCallback={props.heartCallback}
            />
        </div>
        );
    });
    return (
        <div>
            {chatComponents}
        </div>
    )
}

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired,
};

export default ChatLog;

