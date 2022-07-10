import UserCard from "components/UserCard";
import React from "react";
type Props = {
  firstName: string;
  lastName: string;
  image: string;
  country: string;
  onFetchRandomUser: () => void;
  isFetching: boolean;
};
const User = (props: Props) => {
  const { firstName, lastName, image, country, onFetchRandomUser, isFetching } =
    props;
  return (
    <div>
      <UserCard
        firstName={firstName}
        lastName={lastName}
        image={image}
        country={country}
        onFetchRandomUser={onFetchRandomUser}
        isFetching={isFetching}
      />
    </div>
  );
};

export default User;
