import React from "react";
import { useRandomUser } from "calls/user";
import CircularProgress from "@mui/material/CircularProgress";
import UserCard from "components/UserCard";

const RandomUser = () => {
  const { isLoading, data, refetch, isFetching } = useRandomUser();
  const onFetchRandomUser = () => {
    refetch();
  };
  const user = data?.results[0];
  return (
    <div className="flex-c-c height-100vh">
      {isLoading && <CircularProgress />}
      {user && (
        <UserCard
          firstName={user.name.first}
          lastName={user.name.last}
          image={user.picture.large}
          country={user.location.country}
          onFetchRandomUser={onFetchRandomUser}
          isFetching={isFetching}
        />
      )}
    </div>
  );
};

export default RandomUser;
