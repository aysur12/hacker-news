import LogoImg from '../../assets/hacker-news.svg';
import style from './Header.module.scss';

const Header = (props) => {
  return (
    <header className={style['header']}>
      <div className={style['header__container']}>
        <div className={style['header__logo']}>
          <img
            className={style['header__logo-img']}
            src={LogoImg}
            alt="Logo Hacker News"
          />
          <h1 className={style['header__title']}>Hacker News</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
