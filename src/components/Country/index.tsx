import * as React from 'react';
import { useCountryProfileQuery } from '../../generated/graphql';
import CountryAttributes from './CountryAttributes';
import { useParams } from 'react-router-dom';
import ErrorPage from '../../errorPage';
import { Spin } from 'antd';

const CountryProfileContainer = () => { 
  let code = useParams()
  const { data, error, loading } = useCountryProfileQuery({ variables: { code: code.countryID!} });

  if (loading) {
    return <Spin/>;
  }
  if (error || !data) {
    return <ErrorPage/>;
  }
  if (Object.keys(data).length === 0) {
    return <span>🤷</span>
  }
  return <CountryAttributes data={data} />;
};

export default CountryProfileContainer;