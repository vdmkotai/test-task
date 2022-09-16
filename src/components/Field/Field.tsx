import React from "react";
import cx from "clsx";

import styles from "./Field.module.scss";

interface IFieldProps {
  name: string;
  label: string;
  value: string;
  errorText?: string;
  autoFocus?: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Field: React.FC<IFieldProps> = ({
  autoFocus,
  name,
  label,
  value,
  onChange,
  errorText,
}) => (
  <label className={styles.label} htmlFor="lastName">
    {label}
    <input
      autoFocus={autoFocus}
      className={cx({
        [styles.input]: true,
        [styles.inputError]: !!errorText,
      })}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
    <span className={styles.errorText}>{errorText}</span>
  </label>
);

export default Field;
