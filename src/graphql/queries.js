import { gql } from '@apollo/client/core';

export const GET_ALL_POSTS = gql`
  query Posts {
    posts {
      title
      slug
      id
      content {
        html
      }
      coverPhoto {
        url
      }
      author {
        ... on Author {
          avatar {
            url
          }
          name
        }
      }
    }
  }
`;

export const GET_POST = gql`
  query Post($stage: Stage!, $where: PostWhereUniqueInput!) {
    post(stage: $stage, where: $where) {
      title
      id
      content {
        html
      }
      coverPhoto {
        url
      }
      author {
        ... on Author {
          name
          field
          slug
          avatar {
            url
          }
        }
      }
      comments {
        name
        text
        email
        id
        createdAt
      }
    }
  }
`;

export const GET_ALL_AUTHORS = gql`
  query Authors {
    authors {
      name
      field
      avatar {
        url
      }
      slug
    }
  }
`;

export const GET_AUTHOR = gql`
  query Author(
    $where: AuthorWhereUniqueInput!
    $stage: Stage!
    $locales: [Locale!]!
  ) {
    author(where: $where, stage: $stage, locales: $locales) {
      name
      field
      avatar {
        url
      }
      description {
        html
      }
      posts {
        title
        slug
        id
        content {
          html
        }
        coverPhoto {
          url
        }
      }
    }
  }
`;
