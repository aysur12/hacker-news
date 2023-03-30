import LogoImg from '../../assets/hacker-news.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['header__container']}>
        <div className={styles['header__logo']}>
          <img
            className={styles['header__logo-img']}
            src={LogoImg}
            alt="Logo Hacker News"
          />
          <h1 className={styles['header__title']}>Hacker News</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
