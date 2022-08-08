import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
  mutation CreateComment($data: CommentCreateInput!) {
    createComment(data: $data) {
      id
    }
  }
`;
