
import { dummyJsonApi } from "./dummyJsonApi";

export async function getUsers(page: number = 1) {
  const limit = 2;

  const skip = (page - 1) * limit;

  const response = await dummyJsonApi.get("/users", {
    params: {
      limit,
      skip,
    },
  });

  return response.data;
}
