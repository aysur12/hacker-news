import { useDispatch } from 'react-redux';
import { newsActions } from '../store/newsSlice';
import Fetch from '../utils/Fetch';
import Button from '../components/UI/Button';
import NewsList from '../components/NewsList/NewsList';

const News = () => {
  const dispatchFunc = useDispatch();

  const updateNewsList = () => {
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
      .then((response) => response.json())
      .then((data) =>
        dispatchFunc(newsActions.setUpdateNews(data.slice(0, 100)))
      );
  };

  return (
    <div>
      <Button onClick={updateNewsList}>update news</Button>
      <Fetch
        uri={'https://hacker-news.firebaseio.com/v0/newstories.json'}
        renderSuccess={({ data }) => (
          <NewsList
            news={data.slice(0, 100)}
            onUpdateNewsList={updateNewsList}
          />
        )}
      />
    </div>
  );
};

export default News;
