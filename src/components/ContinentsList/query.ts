import { gql } from '@apollo/client';

export const QUERY_CONTINENTS_LIST = gql`
  query ContinentsList {
    continents {
      code
      name
    }
  }
`;