import { gql } from '@apollo/client';

export const QUERY_COUNTRY_PROFILE = gql`
  query CountryProfile($code: ID!) {
    country(code: $code) {
      code
      name
      emoji
      capital
      currency
      native
      languages {
        name
      }
    }
  }
`;