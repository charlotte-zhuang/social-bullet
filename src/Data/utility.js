import { API, graphqlOperation } from "aws-amplify";
import { userByUsername } from "../graphql/queries";

export const userExists = async (username) => {
  const userData = await API.graphql(
    graphqlOperation(userByUsername, { username })
  );
  return userData.data.userByUsername.items.length > 0;
};

export const findUser = async (username) => {
  const userData = await API.graphql(
    graphqlOperation(userByUsername, { username })
  );
  return userData.data.userByUsername.items[0];
};
