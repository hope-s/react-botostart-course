import { gql } from '@apollo/client/core';

export const GET_USERES = gql`
  query User($where: UserWhereUniqueInput!, $stage: Stage!) {
    user(where: $where, stage: $stage) {
      name
      id
      stage
      isActive
      createdAt
      picture
    }
  }
`;
