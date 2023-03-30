import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import updateData from '../../utils/updateData';
import Fetch from '../../utils/Fetch';
import Comment from '../Comment/Comment';
import Button from '../UI/Button';

const Comments = ({ data }) => {
  const [comments, setComments] = useState([]);
  const params = useParams();
  const { kids } = data;

  useEffect(() => {
    setComments(kids);
  }, [kids]);

  const updateCommentsHandler = () => {
    updateData(
      `https://hacker-news.firebaseio.com/v0/item/${params.newsId}.json`
    ).then((newComments) =>
      setComments(() => {
        return newComments ? newComments.kids : comments;
      })
    );
  };

  return (
    <>
      <Button onClick={updateCommentsHandler}>Update comments</Button>
      <ul>
        {comments &&
          comments.map((storyId) => (
            <Fetch
              key={storyId}
              url={`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`}
              renderSuccess={({ data }) => <Comment data={data} />}
            />
          ))}
      </ul>
    </>
  );
};

export default Comments;
