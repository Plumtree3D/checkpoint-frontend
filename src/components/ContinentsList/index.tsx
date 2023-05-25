import * as React from 'react';
import { useContinentsListQuery } from '../../generated/graphql';
import ContinentsList from './ContinentsList';
import ErrorPage from '../../errorPage';
import { Spin } from 'antd';

const ContinentsListContainer = () => {
  const { data, error, loading } = useContinentsListQuery();

  if (loading) {
    return <Spin/>;
  }

  if (error || !data) {
    return <ErrorPage/>;
  }

  return <ContinentsList data={data} />;
};

export default ContinentsListContainer;