/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
