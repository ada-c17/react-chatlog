import ChatEntry from './ChatEntry.js';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const chatComponents = props.entries.map((chat) => {
        return (
            <ChatEntry
            id= {chat.id}
            sender= {chat.sender}
            body= {chat.body}
            timeStamp= {chat.timeStamp}
            />
        )
    });
    return (
        <div>
            {chatComponents}
        </div>
    )
};

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired
};

export default ChatLog;