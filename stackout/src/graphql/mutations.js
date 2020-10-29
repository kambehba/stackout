/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      workdays {
        items {
          id
          title
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      name
      workdays {
        items {
          id
          title
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      name
      workdays {
        items {
          id
          title
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createWorkDay = /* GraphQL */ `
  mutation CreateWorkDay(
    $input: CreateWorkDayInput!
    $condition: ModelWorkDayConditionInput
  ) {
    createWorkDay(input: $input, condition: $condition) {
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
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateWorkDay = /* GraphQL */ `
  mutation UpdateWorkDay(
    $input: UpdateWorkDayInput!
    $condition: ModelWorkDayConditionInput
  ) {
    updateWorkDay(input: $input, condition: $condition) {
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
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteWorkDay = /* GraphQL */ `
  mutation DeleteWorkDay(
    $input: DeleteWorkDayInput!
    $condition: ModelWorkDayConditionInput
  ) {
    deleteWorkDay(input: $input, condition: $condition) {
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
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createWorkout = /* GraphQL */ `
  mutation CreateWorkout(
    $input: CreateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    createWorkout(input: $input, condition: $condition) {
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
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateWorkout = /* GraphQL */ `
  mutation UpdateWorkout(
    $input: UpdateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    updateWorkout(input: $input, condition: $condition) {
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
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteWorkout = /* GraphQL */ `
  mutation DeleteWorkout(
    $input: DeleteWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    deleteWorkout(input: $input, condition: $condition) {
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
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
