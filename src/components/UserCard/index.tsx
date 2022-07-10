import { useState } from "react";
import CardFooter from "components/CardFooter";
import styles from "./style.module.css";
type Props = {
  firstName: string;
  lastName: string;
  image: string;
  country: string;
  onFetchRandomUser: () => void;
  isFetching: boolean;
};

const UserCard = (props: Props) => {
  const [isHide, setIsHide] = useState(false);
  const onSetIsHide = () => {
    setIsHide((prev) => !prev);
  };
  const onRefetch = () => {
    setIsHide(false);
    onFetchRandomUser();
  };
  const { firstName, lastName, image, country, onFetchRandomUser, isFetching } =
    props;
  const fullName = firstName + " " + lastName;
  return (
    <div className={styles.userCard}>
      <img
        src={isHide ? "" : image}
        alt={fullName}
        className={styles.img}
        width={130}
        height={130}
      />

      <div className={"text-primary mb-8"}>
        {isHide ? "Full Name" : fullName}
      </div>
      <div className={"text-primary mb-8"}>{isHide ? "Country" : country}</div>
      <CardFooter
        onFetchRandomUser={onRefetch}
        isFetching={isFetching}
        onSetIsHide={onSetIsHide}
        isHide={isHide}
      />
    </div>
  );
};

export default UserCard;
