import { Link, useLocation } from 'react-router-dom';
import unixTimeToDateTime from '../../utils/unixTimeToDateTime';

const NewsItem = ({ data }) => {
  const { id, title, score, by, time } = data;
  const location = useLocation();
  return (
    <li>
      <Link to={`${location.pathname}/${id}`}>{title}</Link>
      <div>Score: {score}</div>
      <div>Author: {by}</div>
      <div>{unixTimeToDateTime(time)}</div>
    </li>
  );
};

export default NewsItem;
