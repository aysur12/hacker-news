import styles from './Button.module.scss';

const Button = (props) => {
  const { children, className } = props;
  return (
    <button {...props} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
