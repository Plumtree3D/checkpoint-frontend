import * as React from 'react';
import { useCountryProfileQuery } from '../../generated/graphql';
import CountryProfile from './CountryProfile';
import { useParams } from 'react-router-dom';

const CountryProfileContainer = () => { 
  let code = useParams()
  const { data, error, loading } = useCountryProfileQuery({ variables: { code: code.countryID!} });
  console.log(code.countryID)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <CountryProfile data={data} />;
};

export default CountryProfileContainer;