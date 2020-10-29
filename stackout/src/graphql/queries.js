/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        workdays {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWorkDay = /* GraphQL */ `
  query GetWorkDay($id: ID!) {
    getWorkDay(id: $id) {
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
export const listWorkDays = /* GraphQL */ `
  query ListWorkDays(
    $filter: ModelWorkDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getWorkout = /* GraphQL */ `
  query GetWorkout($id: ID!) {
    getWorkout(id: $id) {
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
export const listWorkouts = /* GraphQL */ `
  query ListWorkouts(
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        workDayID
        WorkDay {
          id
          title
          userID
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
