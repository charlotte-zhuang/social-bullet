/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      firstName
      lastName
      imageFilePath
      description
      journal {
        owner
        body
        createdAt
        updatedAt
      }
      projects {
        id
        name
        imageFilePath
        journal {
          owner
          body
          createdAt
          updatedAt
        }
        members
        tags
        description
        startTime
        finishTime
      }
      interests
      friends
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      firstName
      lastName
      imageFilePath
      description
      journal {
        owner
        body
        createdAt
        updatedAt
      }
      projects {
        id
        name
        imageFilePath
        journal {
          owner
          body
          createdAt
          updatedAt
        }
        members
        tags
        description
        startTime
        finishTime
      }
      interests
      friends
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      firstName
      lastName
      imageFilePath
      description
      journal {
        owner
        body
        createdAt
        updatedAt
      }
      projects {
        id
        name
        imageFilePath
        journal {
          owner
          body
          createdAt
          updatedAt
        }
        members
        tags
        description
        startTime
        finishTime
      }
      interests
      friends
      createdAt
      updatedAt
    }
  }
`;
