import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const ChatLog = (props) => { 
       
    const chatDataMap = props.chats.map(item =>(
    <ChatEntry 
        key={item.id}
        id={item.id} 
        sender={item.sender} 
        body={item.body} 
        timeStamp={item.timeStamp} 
        liked={item.liked} 
        onUpdateChat={props.onUpdateChat}/> ))

        return (       
            <main>
            {chatDataMap}
            {/* Wave 01: Render one ChatEntry component
            Wave 02: Render ChatLog component */}
            </main>
                
 ); }

ChatLog.propTypes = {
    chats:PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
        timeStamp: PropTypes.string.isRequired
        
    })),
    onUpdateChat: PropTypes.func.isRequired,
   
};




export default ChatLog;