import React from 'react';
import PropTypes from 'prop-types';

const TotalHearts = (props) => {
  const hearts = (numberOfLikes) => {
    // let heartString = '';
    // for (let i = 0; i < numberOfLikes; i++) {
    //   heartString = `${heartString}❤️`;
    // }
    // console.log(numberOfLikes, heartString);
    // return `${numberOfLikes} ❤️ s ${heartString}`;
    return `${numberOfLikes} ❤️s`;
  };

  return <div className="hearts-count local">{hearts(props.totalLikes)}</div>;
};

TotalHearts.propTypes = {
  totalLikes: PropTypes.number.isRequired,
};

export default TotalHearts;
