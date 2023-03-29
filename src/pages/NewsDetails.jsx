import { useParams } from 'react-router-dom';

import Fetch from '../utils/Fetch';
import NewsItem from '../components/NewsItem/NewsItem';

const NewsDetails = () => {
  const params = useParams();
  return (
    <section>
      <Fetch
        uri={`https://hacker-news.firebaseio.com/v0/item/${params.newsId}.json`}
        renderSuccess={({ data }) => (
          <>
            <NewsItem data={data} />
          </>
        )}
      />
    </section>
  );
};

export default NewsDetails;
