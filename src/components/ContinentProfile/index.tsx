import * as React from 'react';
import { useContinentsProfileQuery } from '../../generated/graphql';
import ContinentProfile from './ContinentProfile';
import { useParams } from 'react-router-dom';

const ContinentProfileContainer = () => { 
  let code = useParams()
  const { data, error, loading } = useContinentsProfileQuery({ variables: { code: code.continentID!} });
  console.log(code.continentID)

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