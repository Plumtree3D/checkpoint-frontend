import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID'];
  countries: Array<Country>;
  name: Scalars['String'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: 'Country';
  capital?: Maybe<Scalars['String']>;
  code: Scalars['ID'];
  continent: Continent;
  currency?: Maybe<Scalars['String']>;
  emoji: Scalars['String'];
  emojiU: Scalars['String'];
  languages: Array<Language>;
  name: Scalars['String'];
  native: Scalars['String'];
  phone: Scalars['String'];
  states: Array<State>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
  rtl: Scalars['Boolean'];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  __typename?: 'Query';
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};


export type QueryContinentArgs = {
  code: Scalars['ID'];
};


export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};


export type QueryCountryArgs = {
  code: Scalars['ID'];
};


export type QueryLanguageArgs = {
  code: Scalars['ID'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']>;
  country: Country;
  name: Scalars['String'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type ContinentsProfileQueryVariables = Exact<{
  code: Scalars['ID'];
}>;


export type ContinentsProfileQuery = { __typename?: 'Query', continent?: { __typename?: 'Continent', name: string, code: string, countries: Array<{ __typename?: 'Country', name: string }> } | null };

export type ContinentsListQueryVariables = Exact<{ [key: string]: never; }>;


export type ContinentsListQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', code: string, name: string }> };


export const ContinentsProfileDocument = gql`
    query ContinentsProfile($code: ID!) {
  continent(code: $code) {
    countries {
      name
    }
    name
    code
  }
}
    `;

/**
 * __useContinentsProfileQuery__
 *
 * To run a query within a React component, call `useContinentsProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useContinentsProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContinentsProfileQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useContinentsProfileQuery(baseOptions: Apollo.QueryHookOptions<ContinentsProfileQuery, ContinentsProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContinentsProfileQuery, ContinentsProfileQueryVariables>(ContinentsProfileDocument, options);
      }
export function useContinentsProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContinentsProfileQuery, ContinentsProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContinentsProfileQuery, ContinentsProfileQueryVariables>(ContinentsProfileDocument, options);
        }
export type ContinentsProfileQueryHookResult = ReturnType<typeof useContinentsProfileQuery>;
export type ContinentsProfileLazyQueryHookResult = ReturnType<typeof useContinentsProfileLazyQuery>;
export type ContinentsProfileQueryResult = Apollo.QueryResult<ContinentsProfileQuery, ContinentsProfileQueryVariables>;
export const ContinentsListDocument = gql`
    query ContinentsList {
  continents {
    code
    name
  }
}
    `;

/**
 * __useContinentsListQuery__
 *
 * To run a query within a React component, call `useContinentsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useContinentsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContinentsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useContinentsListQuery(baseOptions?: Apollo.QueryHookOptions<ContinentsListQuery, ContinentsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContinentsListQuery, ContinentsListQueryVariables>(ContinentsListDocument, options);
      }
export function useContinentsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContinentsListQuery, ContinentsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContinentsListQuery, ContinentsListQueryVariables>(ContinentsListDocument, options);
        }
export type ContinentsListQueryHookResult = ReturnType<typeof useContinentsListQuery>;
export type ContinentsListLazyQueryHookResult = ReturnType<typeof useContinentsListLazyQuery>;
export type ContinentsListQueryResult = Apollo.QueryResult<ContinentsListQuery, ContinentsListQueryVariables>;