/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
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
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
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
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
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
      owner
    }
  }
`;
