import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
}

export const Button = ({ onClick }: ButtonProps): JSX.Element => {
  return (
    <button className={styles["button"]} onClick={onClick}>
      Сформировать отчет
    </button>
  );
};
