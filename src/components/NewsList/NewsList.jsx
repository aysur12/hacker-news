// import styles from './NewsList.modules.scss';
import Fetch from '../../utils/Fetch';

const NewsList = () => {
  return (
    <Fetch
      uri="https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
      renderSuccess={({ data }) => (
        <ul>
          {data.slice(0, 100).map(storyId => (
            <Fetch
              key={storyId}
              uri={`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`}
              renderSuccess={({ data }) => (
                <li>{data.title}</li>
              )}
            />
          ))}
        </ul>
      )}
    />
  );
}

export default NewsList;
