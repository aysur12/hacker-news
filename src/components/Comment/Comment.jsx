import { useState } from 'react';
import Fetch from '../../utils/Fetch';
import unixTimeToDateTime from '../../utils/unixTimeToDateTime';

const Comment = ({ data }) => {
  const [isVisibleComments, setIsVisibleComments] = useState(false);

  const { by, time, text, kids } = data;

  const toggleVisibilityHandler = () => {
    console.log('aaaa');
    setIsVisibleComments(!isVisibleComments);
  };

  return (
    <li onClick={toggleVisibilityHandler}>
      {text && (
        <div>
          <div>{unixTimeToDateTime(time)}</div>
          <p>{by}</p>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      )}
      <ul>
        {kids &&
          isVisibleComments &&
          kids.map((storyId) => (
            <Fetch
              key={storyId}
              url={`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`}
              renderSuccess={({ data }) => <Comment data={data} />}
            />
          ))}
      </ul>
    </li>
  );
};

export default Comment;
