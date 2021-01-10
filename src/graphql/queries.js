/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      firstName
      lastName
      imageFilePath
      description
      journal {
        body
        createdAt
        updatedAt
      }
      projects {
        id
        name
        imageFilePath
        journal {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        firstName
        lastName
        imageFilePath
        description
        journal {
          body
          createdAt
          updatedAt
        }
        projects {
          id
          name
          imageFilePath
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
      nextToken
    }
  }
`;
export const userByUsername = /* GraphQL */ `
  query UserByUsername(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        email
        firstName
        lastName
        imageFilePath
        description
        journal {
          body
          createdAt
          updatedAt
        }
        projects {
          id
          name
          imageFilePath
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
      nextToken
    }
  }
`;
