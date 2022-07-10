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
      <img src={image} alt={firstName + lastName} />
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{country}</div>
    </div>
  );
};

export default User;
