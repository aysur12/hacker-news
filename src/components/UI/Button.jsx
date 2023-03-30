import styles from './Button.module.scss';

const Button = (props) => {
  const { children, title, className } = props;
  return (
    <button {...props} className={`${styles.button} ${className}`} title={title}>
      {children}
    </button>
  );
};

export default Button;
