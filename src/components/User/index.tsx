import UserCard from "components/UserCard";
import React from "react";
type Props = {
  firstName: string;
  lastName: string;
  image: string;
  country: string;
};
const User = (props: Props) => {
  const { firstName, lastName, image, country } = props;
  return (
    <div>
      <UserCard
        firstName={firstName}
        lastName={lastName}
        image={image}
        country={country}
      />
    </div>
  );
};

export default User;
