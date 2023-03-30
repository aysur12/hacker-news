import { Link } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Button from '../UI/Button';
import unixTimeToDateTime from '../../utils/unixTimeToDateTime';
import styles from './NewsContent.module.scss';

const NewsContent = ({ data }) => {
  const { url, text, title, by, time, descendants } = data;

  const content = text ? (
    <p
      className={styles['news-content__text']}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  ) : (
    <a
      className={styles['news-content__link']}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      Link News
    </a>
  );

  return (
    <div className={styles['news-content']}>
      <div className={styles['news-content__announce']}>
        <div className={styles['news-content__up-block']}>
          <Link to="../.." relative="path">
            <Button
              className={styles['news-content__return-btn']}
              title="back to news list"
            >
              <RiArrowGoBackLine />
            </Button>
          </Link>
          <div className={styles['news-content__title-block']}>
            <div className={styles['news-content__info']}>
              {unixTimeToDateTime(time)}
            </div>
            <h2 className={styles['news-content__title']}>{title}</h2>
          </div>
        </div>
        <div className={styles['news-content__down-block']}>
          <div className={styles['news-content__info']}>Author: {by}</div>
          <div className={styles['news-content__info']}>
            Comments: {descendants}
          </div>
        </div>
      </div>
      <div className={styles['news-content__content-block']}>{content}</div>
    </div>
  );
};

export default NewsContent;
