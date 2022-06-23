import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';


const ChatLog = (props) => {
// props is going to an array of objects
    const chatEntryArray = props.entries.map((chatEntry) => {
        return (
            <ChatEntry
                key={chatEntry.id}
                id = {chatEntry.id}
                sender={chatEntry.sender}
                body={chatEntry.body}
                timeStamp={chatEntry.timeStamp}
                liked={chatEntry.liked}
                onUpdate={props.onUpdate}
            />
        )
    })

    return (
        <>
            <section>
                <ul className="container">{chatEntryArray}</ul>
            </section>
        </>
    )

}

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object).isRequired,
    onUpdate: PropTypes.func
}


export default ChatLog;