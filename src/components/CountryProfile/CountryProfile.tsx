import * as React from 'react';
import { CountryProfileQuery } from '../../generated/graphql';
import './styles.css';
import { Link } from 'react-router-dom';

interface Props {
  data: CountryProfileQuery;
}

const className = 'LaunchProfile';

const ContinentProfile: React.FC<Props> = ({ data }) => {
  if (!data.country) {
    return <div>No launch available</div>;
  }

  return (
    <div className={className}>
      <h1 className={`${className}__title`}>
        {data.country.name} ({data.country.code})
      </h1>
      {data.country.emoji}
      {data.country.capital}
      {data.country.currency}
      {data.country.languages.map((lang) => 
        lang.name
      )}

    </div>
  );
};

export default ContinentProfile;