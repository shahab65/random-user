import React from "react";
import Button from "components/Button";
import styles from "./style.module.css";
import Loading from "components/Loading";

type Props = {
  onFetchRandomUser: () => void;
  isFetching: boolean;
  onSetIsHide: () => void;
  isHide: boolean;
};

const CardFooter = (props: Props) => {
  const { onFetchRandomUser, isFetching, onSetIsHide, isHide } = props;

  return (
    <div className={styles.cardFooter}>
      {!isHide && (
        <Button onClick={onSetIsHide} isSecondary>
          Hide
        </Button>
      )}
      <Button onClick={onFetchRandomUser}>
        {isFetching ? <Loading size={8} color={"var(--secondary)"} /> : "Show"}
      </Button>
    </div>
  );
};

export default CardFooter;
