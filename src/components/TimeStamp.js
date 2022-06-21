import { DateTime } from 'luxon';

const TimeStamp = (props) => {
  const time = DateTime.fromISO(props.time);
  const absolute = time.toFormat('MMMM Do YYYY, h:mm:ss a');
  const relative = time.toRelative();

  return (
    <p className="entry-time" title={absolute}>
      {relative}
    </p>
  );
};

export default TimeStamp;
