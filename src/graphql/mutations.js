import { gql } from '@apollo/client';

export const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $title: String!, $body: String!) {
    updatePost(id: $id, input: { title: $title, body: $body }) {
      id
      title
      body
      user {
        id
        username
        email
        company {
          name
        }
        phone
        posts {
          data {
            id
            title
            body
          }
        }
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $username: String!
    $email: String!
    $phone: String
    $website: String
  ) {
    createUser(
      input: {
        name: $name
        username: $username
        email: $email
        phone: $phone
        website: $website
      }
    ) {
      name
      username
      email
      phone
      website
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`;
