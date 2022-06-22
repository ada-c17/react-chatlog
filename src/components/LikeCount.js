import React from 'react';

const LikeCount = (props) => {
  const calculateLikes = () => {
    let likes = 0;
    for (let entry of props.entries) {
      if (entry.liked === true) {
        likes += 1;
      }
    }
    return likes;
  };
  return (
    <div>
      <h3>{calculateLikes()} ❤️s</h3>
    </div>
  );
};

export default LikeCount;
