import * as React from 'react';
import { useContinentsProfileQuery } from '../../generated/graphql';
import ContinentProfile from './ContinentProfile';
import { useParams } from 'react-router-dom';

const ContinentProfileContainer = () => { 
  const { data, error, loading } = useContinentsProfileQuery({ variables: { code: "EU" } });
  let truc = useParams()
  console.log(truc)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <ContinentProfile data={data} />;
};

export default ContinentProfileContainer;