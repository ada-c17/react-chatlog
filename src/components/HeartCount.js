const HeartCount = (messages) => {
  let count = 0;
  messages.forEach((m) => (m.liked ? count++ : m));
  return <div>{count} ❤️s</div>;
};
export default HeartCount;
