import { Link } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Button from '../../components/UI/Button';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <section className={styles['not-found-page']}>
      <p className={styles['not-found-page__info']}>404</p>
      <h2 className={styles['not-found-page__title']}>Ooops, page not found</h2>
      <Link className={styles['not-found-page__link']} to="/hacker-news">
        <Button title="back to news list">
          <RiArrowGoBackLine />
        </Button>
      </Link>
    </section>
  );
};

export default NotFound;
