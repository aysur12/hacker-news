import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles['content']}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
