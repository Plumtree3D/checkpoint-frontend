import { gql } from '@apollo/client';

export const QUERY_CONTINENT_PROFILE = gql`
  query ContinentsProfile($code: ID!) {
    continent(code: $code) {
      countries {
        name,
        code
      }
      name,
      code
    }
  }
`;