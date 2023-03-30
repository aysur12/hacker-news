import { useDispatch } from 'react-redux';
import { newsActions } from '../store/newsSlice';
import updateData from '../utils/updateData';
import Fetch from '../utils/Fetch';
import Button from '../components/UI/Button';
import NewsList from '../components/NewsList/NewsList';

const News = () => {
  const dispatchFunc = useDispatch();

  const updateNewsList = () => {
    updateData(
      'https://hacker-news.firebaseio.com/v0/newstories.json'
    ).then((newstories) =>
      dispatchFunc(newsActions.setUpdateNews(newstories.slice(0, 100)))
    );
  };

  return (
    <section>
      <Button onClick={updateNewsList}>update news</Button>
      <Fetch
        url={'https://hacker-news.firebaseio.com/v0/newstories.json'}
        renderSuccess={({ data }) => (
          <NewsList
            news={data.slice(0, 100)}
            onUpdateNewsList={updateNewsList}
          />
        )}
      />
    </section>
  );
};

export default News;
