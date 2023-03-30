import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Fetch from '../../utils/Fetch';
import NewsItem from '../NewsItem/NewsItem';
import styles from './NewsList.module.scss'

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
      onUpdateNewsList();
    }, 60000);
    return () => clearInterval(interval);
  }, [onUpdateNewsList]);

  return (
    <div className={styles['news-list']}>
      <ul className={styles['news-list__list']}>
        {newsList.map((storyId) => (
          <Fetch
            key={storyId}
            url={`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`}
            renderSuccess={({ data }) => (
              <li>
                <NewsItem data={data} />
              </li>
            )}
          />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
