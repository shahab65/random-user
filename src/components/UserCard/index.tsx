import React from "react";
import CardFooter from "components/CardFooter";
import styles from "./style.module.css";
type Props = {
  firstName: string;
  lastName: string;
  image: string;
  country: string;
  onFetchRandomUser: () => void;
};

const UserCard = (props: Props) => {
  const { firstName, lastName, image, country, onFetchRandomUser } = props;
  const fullName = firstName + " " + lastName;
  return (
    <div className={styles.userCard}>
      <img src={image} alt={fullName} className={styles.img} />

      <div className={"text-primary mb-8"}>{fullName}</div>
      <div className={"text-primary mb-8"}>{country}</div>
      <CardFooter onFetchRandomUser={onFetchRandomUser} />
    </div>
  );
};

export default UserCard;
