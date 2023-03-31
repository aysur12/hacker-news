import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RiRefreshFill } from 'react-icons/ri';
import updateData from '../../utils/updateData';
import Fetch from '../../utils/Fetch';
import Comment from '../Comment/Comment';
import Button from '../UI/Button';
import styles from './Comments.module.scss';

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

  const noCommentsBlock = <p className={styles['comments__empty']}>No comments</p>;

  return (
    <div className={styles['comments']}>
      <Button onClick={updateCommentsHandler} title="update comments">
        <RiRefreshFill />
      </Button>
      {comments ? (
        <ul className={styles['comments__list']}>
          {comments &&
            comments.map((storyId) => (
              <Fetch
                key={storyId}
                url={`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`}
                renderSuccess={({ data }) => <Comment data={data} />}
              />
            ))}
        </ul>
      ) : (
        noCommentsBlock
      )}
    </div>
  );
};

export default Comments;
