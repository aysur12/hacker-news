import Fetch from '../utils/Fetch';
import NewsList from '../components/NewsList/NewsList';

const News = () => {
  return (
    <div>
      <Fetch
        uri={'https://hacker-news.firebaseio.com/v0/newstories.json'}
        renderSuccess={({ data }) => (
          <NewsList
            news={data.slice(0, 100)}
          />
        )}
      />
    </div>
  );
};

export default News;
