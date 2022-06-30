import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map((entry) => {
        return (
            <ChatEntry
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}>
            </ChatEntry>
        );
    });
    return <div className="chat-messages">
        {chatEntryComponents}
    </div>
};

// import {useState} from 'react';
// const [petCount, setPetCount] = useState(0);
// const petCat = () => {
//     setPetCount(petCount + 1);
// }

// const studentComponents = studentData.map(student => {
//   return (
//       <li><Student name={student.nameData} email={student.emailData}></Student></li>
//   );
// });

export default ChatLog;