import './ColorChoice.css';
import PropTypes from 'prop-types';
// import Sender from './Sender';

const ColorChoice = (props) => {
  const entries = props.chatMsg;
  const sender1 = entries[0].sender;
  const sender2 = entries[1].sender;

  // const colorComponents = () => {
  //   <Sender
  //     sender1={sender1}
  //     sender2={sender2}
  //   />
  // }

  return (
    // <div>{colorComponents}</div>
    
    <header>
      <div className='first-header'>
        <ul className='head-info'>
          <li className='head-text'>Chat between </li>
          <li className='first-sender'>{sender1}</li>
          <li className='head-text'> and </li>
          <li className='second-sender'>{sender2} </li>
        </ul>
      </div>
      <div className='second-header'>
        <ul className='head-info likes'>
          <li className='first-sender'>{sender1}</li>
          <li>❤️</li>
          <li className='second-sender'>{sender2}</li>
        </ul>
      </div>
    </header>
  
  );
};
ColorChoice.propTypes = {
  // id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
}
export default ColorChoice;