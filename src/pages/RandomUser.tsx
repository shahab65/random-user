import React from "react";
import { useRandomUser } from "calls/user";

const RandomUser = () => {
  const randomUser = useRandomUser();
  console.log("randomUser", randomUser.data);
  return <div>random user</div>;
};

export default RandomUser;
