import * as React from 'react';
import { useContinentsListQuery } from '../../generated/graphql';
import ContinentsList from './ContinentsList';

const ContinentsListContainer = () => {
  const { data, error, loading } = useContinentsListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <ContinentsList data={data} />;
};

export default ContinentsListContainer;