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
        description
        filePath
      }
      projects {
        id
        name
        imageFilePath
        journal {
          description
          filePath
        }
        members {
          id
          username
          email
          firstName
          lastName
          imageFilePath
          description
          interests
          createdAt
          updatedAt
        }
        tags
        description
        startTime
        finishTime
      }
      interests
      friends {
        id
        username
        email
        firstName
        lastName
        imageFilePath
        description
        journal {
          description
          filePath
        }
        projects {
          id
          name
          imageFilePath
          tags
          description
          startTime
          finishTime
        }
        interests
        friends {
          id
          username
          email
          firstName
          lastName
          imageFilePath
          description
          interests
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
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
          description
          filePath
        }
        projects {
          id
          name
          imageFilePath
          tags
          description
          startTime
          finishTime
        }
        interests
        friends {
          id
          username
          email
          firstName
          lastName
          imageFilePath
          description
          interests
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
