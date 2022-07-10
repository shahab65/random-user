import React from "react";
import { useRandomUser } from "calls/user";
import CircularProgress from "@mui/material/CircularProgress";
import User from "components/User";

const RandomUser = () => {
  const { isLoading, data, refetch } = useRandomUser();
  const onFetchRandomUser = () => {
    refetch();
  };
  console.log("randomUser", data);
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <User
      firstName={data[0].name.first}
      lastName={data[0].name.last}
      image={data[0].picture.large}
      country={data[0].location.country}
      onFetchRandomUser={onFetchRandomUser}
    />
  );
};

export default RandomUser;
