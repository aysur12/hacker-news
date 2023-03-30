import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import unixTimeToDateTime from '../../utils/unixTimeToDateTime';

const NewsContent = ({ data }) => {
  const { url, text, title, by, time, descendants } = data;

  const content = text ? (
    <p dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    <a href={url} rel="noopener noreferrer" target="_blank">Link News</a>
  );

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <div>Author: {by}</div>
        <div>{unixTimeToDateTime(time)}</div>
        <div>Comments count:{descendants}</div>
      </div>
      {content}
      <Link to="../.." relative="path">
        <Button>To All News</Button>
      </Link>
    </div>
  );
};

export default NewsContent;
