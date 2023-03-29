// import styles from './NewsList.modules.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Fetch from '../../utils/Fetch';
import NewsItem from '../NewsItem/NewsItem';

const NewsList = ({ news, onUpdateNewsList }) => {
  const storeNews = useSelector((state) => state.news.news);
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    if (!storeNews.length) {
      setNewsList(news);
    } else {
      setNewsList(storeNews);
    }
  }, [news, storeNews]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('update');
      onUpdateNewsList();
    }, 60000);
    return () => clearInterval(interval);
  }, [onUpdateNewsList]);

  return (
    <div>
      <ul>
        {newsList.map((storyId) => (
          <Fetch
            key={storyId}
            uri={`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`}
            renderSuccess={({ data }) => <NewsItem data={data} />}
          />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
