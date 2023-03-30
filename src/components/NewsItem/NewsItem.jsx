import { Link } from 'react-router-dom';
import { RiNewspaperLine } from 'react-icons/ri';
import unixTimeToDateTime from '../../utils/unixTimeToDateTime';
import styles from './NewsItem.module.scss';

const NewsItem = ({ data }) => {
  const { id, title, score, by, time, descendants } = data;

  return (
    <div className={styles['news-item']}>
      <div className={styles['news-item__up-content']}>
        <RiNewspaperLine className={styles['news-item__icon']} />
        <Link className={styles['news-item__link']} to={`new-story/${id}`}>{title}</Link>
      </div>
      <div className={styles['news-item__down-content']}>
        <div className={styles['news-item__info']}>Points: {score}</div>
        <div className={styles['news-item__info']}>Author: {by}</div>
        <div className={styles['news-item__info']}>Created: {unixTimeToDateTime(time)}</div>
        <div className={styles['news-item__info']}>Comments: {descendants}</div>
      </div>
    </div>
  );
};

export default NewsItem;
