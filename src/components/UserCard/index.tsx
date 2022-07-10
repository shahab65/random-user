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
        alt={isHide ? "" : fullName}
        className={styles.img}
        width={130}
        height={130}
      />

      <p className={"text-primary mb-8"} data-testid="fullName">
        {isHide ? "Full Name" : fullName}
      </p>
      <p className={"text-primary mb-8"} data-testid="country">
        {isHide ? "Country" : country}
      </p>
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
