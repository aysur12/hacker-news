import Button from '../components/UI/Button';
import Fetch from '../utils/Fetch';
import NewsList from '../components/NewsList/NewsList';

const News = () => {
  const updateNewsList = () => {
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
      .then((response) => response.json())
      .then((data) => setNewsList(data.slice(0, 100)));
  };

  return (
    <div>
      <Button onClick={updateNewsList}/>
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
