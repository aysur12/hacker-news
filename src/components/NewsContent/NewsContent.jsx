import { Link } from 'react-router-dom';

const NewsContent = ({ data }) => {
  const { url, text } = data;

  const content = text ? (
    <div dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    <a href={url} rel="noopener noreferrer" target="_blank">Link News</a>
  );

  return (
    <div>
      {content}
      <Link to="../.." relative="path">
        To All News
      </Link>
    </div>
  );
};

export default NewsContent;
