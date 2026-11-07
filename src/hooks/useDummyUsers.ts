
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/dummyJsonService";

export function useDummyUsers(page: number = 1) {
  return useQuery({
    queryKey: ["dummyjson", "users", page],
    queryFn: () => getUsers(page),
  });
}
