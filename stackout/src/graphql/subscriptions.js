/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      workdays {
        items {
          id
          title
          userID
          createdAt
          workoutCounter
          updatedAt
        }
        nextToken
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
      name
      workdays {
        items {
          id
          title
          userID
          createdAt
          workoutCounter
          updatedAt
        }
        nextToken
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
      name
      workdays {
        items {
          id
          title
          userID
          createdAt
          workoutCounter
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWorkDay = /* GraphQL */ `
  subscription OnCreateWorkDay {
    onCreateWorkDay {
      id
      title
      userID
      user {
        id
        name
        workdays {
          nextToken
        }
        createdAt
        updatedAt
      }
      workouts {
        items {
          id
          workDayID
          content
          createdAt
          order
          updatedAt
        }
        nextToken
      }
      createdAt
      workoutCounter
      updatedAt
    }
  }
`;
export const onUpdateWorkDay = /* GraphQL */ `
  subscription OnUpdateWorkDay {
    onUpdateWorkDay {
      id
      title
      userID
      user {
        id
        name
        workdays {
          nextToken
        }
        createdAt
        updatedAt
      }
      workouts {
        items {
          id
          workDayID
          content
          createdAt
          order
          updatedAt
        }
        nextToken
      }
      createdAt
      workoutCounter
      updatedAt
    }
  }
`;
export const onDeleteWorkDay = /* GraphQL */ `
  subscription OnDeleteWorkDay {
    onDeleteWorkDay {
      id
      title
      userID
      user {
        id
        name
        workdays {
          nextToken
        }
        createdAt
        updatedAt
      }
      workouts {
        items {
          id
          workDayID
          content
          createdAt
          order
          updatedAt
        }
        nextToken
      }
      createdAt
      workoutCounter
      updatedAt
    }
  }
`;
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout {
    onCreateWorkout {
      id
      workDayID
      WorkDay {
        id
        title
        userID
        user {
          id
          name
          createdAt
          updatedAt
        }
        workouts {
          nextToken
        }
        createdAt
        workoutCounter
        updatedAt
      }
      content
      createdAt
      order
      updatedAt
    }
  }
`;
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout {
    onUpdateWorkout {
      id
      workDayID
      WorkDay {
        id
        title
        userID
        user {
          id
          name
          createdAt
          updatedAt
        }
        workouts {
          nextToken
        }
        createdAt
        workoutCounter
        updatedAt
      }
      content
      createdAt
      order
      updatedAt
    }
  }
`;
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout {
    onDeleteWorkout {
      id
      workDayID
      WorkDay {
        id
        title
        userID
        user {
          id
          name
          createdAt
          updatedAt
        }
        workouts {
          nextToken
        }
        createdAt
        workoutCounter
        updatedAt
      }
      content
      createdAt
      order
      updatedAt
    }
  }
`;
