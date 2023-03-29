import { useState, useEffect } from 'react';
import Fetch from '../../utils/Fetch';
import Comment from '../Comment/Comment';

const Comments = ({ data }) => {
  const [comments, setComments] = useState([]);
  const { kids } = data;

  useEffect(() => {
    setComments(kids);
  }, [kids]);

  return (
    <>
      {comments &&
        comments.map((storyId) => (
          <ul>
            <Fetch
              key={storyId}
              url={`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`}
              renderSuccess={({ data }) => <Comment data={data} />}
            />
          </ul>
        ))}
    </>
  );
};

export default Comments;
