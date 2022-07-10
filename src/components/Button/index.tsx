import React from "react";
import styles from "./style.module.css";

type Props = {
  children: React.ReactNode;
  isSecondary?: boolean;
  onClick?: () => void;
};
const Button = (props: Props) => {
  const { children, isSecondary = false, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${isSecondary && styles.secondary}`}
    >
      {children}
    </button>
  );
};

export default Button;
