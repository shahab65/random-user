import React from "react";
import Button from "components/Button";
import styles from "./style.module.css";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {
  onFetchRandomUser: () => void;
  isFetching: boolean;
  onSetIsHide: () => void;
};

const CardFooter = (props: Props) => {
  const { onFetchRandomUser, isFetching, onSetIsHide } = props;

  return (
    <div className={styles.cardFooter}>
      <Button onClick={onSetIsHide} isSecondary>
        hide
      </Button>
      <Button onClick={onFetchRandomUser}>
        {isFetching ? <CircularProgress size={10} color="inherit" /> : "show"}
      </Button>
    </div>
  );
};

export default CardFooter;
