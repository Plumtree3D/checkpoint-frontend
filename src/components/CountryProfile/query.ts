import { gql } from '@apollo/client';

export const QUERY_COUNTRY_PROFILE = gql`
  query CountryProfile($code: ID!) {
    country(code: $code) {
      name,
      code
    }
  }
`;