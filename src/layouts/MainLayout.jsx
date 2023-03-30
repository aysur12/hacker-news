import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import style from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={style['content']}>
        <div className={style['content__container']}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
