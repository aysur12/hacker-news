import { Link } from "react-router-dom";

const NewsContent = ({ data }) => {
  const { url } = data;

  return (
    <div>
      <a href={url} rel="noopener noreferrer" target="_blank">
        News link
      </a>
      <Link to="../.." relative="path">
        To All News
      </Link>
    </div>
  );
};

export default NewsContent;
