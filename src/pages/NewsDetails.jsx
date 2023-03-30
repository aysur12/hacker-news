import { useParams } from 'react-router-dom';

import Fetch from '../utils/Fetch';
import NewsContent from '../components/NewsContent/NewsContent';
import Comments from '../components/Comments/Comments';

const NewsDetails = () => {
  const params = useParams();
  return (
    <section>
      <Fetch
        url={`https://hacker-news.firebaseio.com/v0/item/${params.newsId}.json`}
        renderSuccess={({ data }) => (
          <>
            <NewsContent data={data}/>
            <Comments data={data}/>
          </>
        )}
      />
    </section>
  );
};

export default NewsDetails;
