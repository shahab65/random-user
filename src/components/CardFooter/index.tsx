import React from "react";
import Button from "components/Button";
import styles from "./style.module.css";

type Props = {
  onFetchRandomUser: () => void;
};

const CardFooter = (props: Props) => {
  const { onFetchRandomUser } = props;

  return (
    <div className={styles.cardFooter}>
      <Button isSecondary>hide</Button>
      <Button onClick={onFetchRandomUser}>show</Button>
    </div>
  );
};

export default CardFooter;
