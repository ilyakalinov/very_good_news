import styles from "./InputFilter.module.scss";

interface InputFilterProps {
  handleChange: (value?: string) => void;
}

export const InputFilter = ({
  handleChange,
}: InputFilterProps): JSX.Element => (
  <div className={styles["wrapper"]}>
    <input
      type="text"
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    />
  </div>
);
