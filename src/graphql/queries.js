import { gql } from '@apollo/client/core';

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      username
      email
      phone
      id
    }
  }
`;
