import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  {
    getAllUsers {
      id
      firstName
      email
    }
  }
`;
