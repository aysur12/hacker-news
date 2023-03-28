// import styles from './NewsList.modules.scss';
import Fetch from '../../utils/Fetch';
import { useState, useEffect } from 'react';

const NewsList = ({ news }) => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    setNewsList(news);
  }, [news]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('update');
      updateNewsList();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const updateNewsList = () => {
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
      .then((response) => response.json())
      .then((data) => setNewsList(data.slice(0, 100)));
  };

  const handleUpdateClick = () => {
    updateNewsList();
  };

  return (
    <div>
      <button onClick={handleUpdateClick}>Update</button>
      <ul>
        {newsList.map((storyId) => (
          <Fetch
            key={storyId}
            uri={`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`}
            renderSuccess={({ data }) => (
              <li>
                title: {data.title} <br /> 
                score: {data.score} <br />
                by: {data.by} <br />
                time: {data.time}
              </li>
            )}
          />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
