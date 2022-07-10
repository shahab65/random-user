import axios from "axios";
import { useQuery } from "react-query";
import config from "constants/config";
// import { SubscriptionInquiry } from "types";

export function useRandomUser() {
  return useQuery<any, any>("randomUser", () =>
    axios.get(config.apiEndpoints.randomUser).then((res) => res.data.results)
  );
}
