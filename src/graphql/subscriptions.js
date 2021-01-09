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
