import { DateTime } from 'luxon';

const TimeStamp = (props) => {
  const time = DateTime.fromISO(props.time);
  const absolute = time.toFormat('ff');
  const relative = time.toRelative();

  return <span title={absolute}>{relative}</span>;
};

export default TimeStamp;
