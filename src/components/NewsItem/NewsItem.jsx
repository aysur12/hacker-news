import { Link } from 'react-router-dom';
import unixTimeToDateTime from '../../utils/unixTimeToDateTime';

const NewsItem = ({ data }) => {
  const { id, title, score, by, time, descendants } = data;

  return (
    <li>
      <Link to={`new-story/${id}`}>{title}</Link>
      <div>Score: {score}</div>
      <div>Author: {by}</div>
      <div>{unixTimeToDateTime(time)}</div>
      <div>Comments count:{descendants}</div>
    </li>
  );
};

export default NewsItem;
