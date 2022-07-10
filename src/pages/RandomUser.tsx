import React from "react";
import { useRandomUser } from "calls/user";
import UserCard from "components/UserCard";
import Loading from "components/Loading";

const RandomUser = () => {
  const { isLoading, data, refetch, isFetching } = useRandomUser();
  const onFetchRandomUser = () => {
    refetch();
  };
  const user = data?.results[0];
  return (
    <div className="flex-c-c height-100vh">
      {isLoading && <Loading />}
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
