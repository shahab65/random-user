import React from "react";
import Button from "components/Button";
import styles from "./style.module.css";

const CardFooter = () => {
  return (
    <div className={styles.cardFooter}>
      <Button isSecondary>hide</Button>
      <Button>show</Button>
    </div>
  );
};

export default CardFooter;
