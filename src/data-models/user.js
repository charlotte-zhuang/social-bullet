import { API, Auth, graphqlOperation } from "aws-amplify";

import { listUsers } from "../graphql/queries";
import { updateUser, createUser } from "../graphql/mutations";

export const test = async () => {
  console.log("ay");
  const userData = await API.graphql(graphqlOperation(listUsers));

  const userList = userData.data.listUsers.items;
  return userList;
};
