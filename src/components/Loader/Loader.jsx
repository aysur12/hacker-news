import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles['loader']}>
      <div
        className={`${styles['loader__pulse-bubble']} ${styles['loader__pulse-bubble_1']}`}
      ></div>
      <div
        className={`${styles['loader__pulse-bubble']} ${styles['loader__pulse-bubble_2']}`}
      ></div>
      <div
        className={`${styles['loader__pulse-bubble']} ${styles['loader__pulse-bubble_3']}`}
      ></div>
    </div>
  );
};

export default Loader;
