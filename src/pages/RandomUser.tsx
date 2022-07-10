import React from "react";
import { useRandomUser } from "calls/user";
import CircularProgress from "@mui/material/CircularProgress";
import User from "components/User";

const RandomUser = () => {
  const { isLoading, data, refetch, isFetching, isSuccess } = useRandomUser();
  const onFetchRandomUser = () => {
    refetch();
  };

  return (
    <div className="flex-c-c height-100vh">
      {isLoading && <CircularProgress />}
      {isSuccess && (
        <User
          firstName={data[0].name.first}
          lastName={data[0].name.last}
          image={data[0].picture.large}
          country={data[0].location.country}
          onFetchRandomUser={onFetchRandomUser}
          isFetching={isFetching}
        />
      )}
    </div>
  );
};

export default RandomUser;
