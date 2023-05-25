import * as React from 'react';
import { useContinentsProfileQuery } from '../../generated/graphql';
import Continent from './Continent';
import { useParams } from 'react-router-dom';
import ErrorPage from '../../errorPage';
import { Spin } from 'antd';
const ContinentProfileContainer = () => { 
  let code = useParams()
  const { data, error, loading } = useContinentsProfileQuery({ variables: { code: code.continentID!} });

  if (loading) {
    return <Spin/>;
  }

  if (error || !data) {
    return <ErrorPage/>;
  }

  return <Continent data={data} />;
};

export default ContinentProfileContainer;