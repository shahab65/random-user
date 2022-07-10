import React from "react";
import styles from "./style.module.css";

type Props = {
  children: React.ReactNode;
  isSecondary?: boolean;
};
const Button = (props: Props) => {
  const { children, isSecondary = false } = props;
  return (
    <button className={`${styles.button} ${isSecondary && styles.secondary}`}>
      {children}
    </button>
  );
};

export default Button;
