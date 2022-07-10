import axios from "axios";
import { useQuery } from "react-query";
import config from "constants/config";
import { RandomUser } from "../types/user";
// import { SubscriptionInquiry } from "types";

export function useRandomUser() {
  return useQuery<RandomUser, string>("randomUser", () =>
    axios.get(config.apiEndpoints.randomUser).then((res) => res.data)
  );
}
