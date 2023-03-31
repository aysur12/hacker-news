import { useState } from 'react';
import Fetch from '../../utils/Fetch';
import unixTimeToDateTime from '../../utils/unixTimeToDateTime';
import styles from './Comment.module.scss';

const Comment = ({ data }) => {
  const [isVisibleComments, setIsVisibleComments] = useState(false);

  const { by, time, text, kids } = data;

  const toggleVisibilityHandler = () => {
    console.log(isVisibleComments);
    setIsVisibleComments(!isVisibleComments);
  };

  return (
    <li className={styles['comment']} onClick={toggleVisibilityHandler}>
      {text && (
        <div className={styles['comment__content']}>
          <div className={styles['comment__heading']}>
            <p className={styles['comment__user']}>{by}</p>
            <p className={styles['comment__date']}>
              {unixTimeToDateTime(time)}
            </p>
          </div>
          <div className={styles['comment__text']} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      )}
      <ul className={styles['comment__sub-list']}>
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
