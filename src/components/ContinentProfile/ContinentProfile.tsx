import * as React from 'react';
import { ContinentsProfileQuery } from '../../generated/graphql';
import './styles.css';
import { Link } from 'react-router-dom';

interface Props {
  data: ContinentsProfileQuery;
}

const className = 'LaunchProfile';

const ContinentProfile: React.FC<Props> = ({ data }) => {
  if (!data.continent) {
    return <div>No launch available</div>;
  }

  return (
    <div className={className}>
      <h1 className={`${className}__title`}>
        {data.continent.name} {data.continent.code}
      </h1>
        <ul>
          {data.continent.countries.map((country, i) =>
            country ? (
                <li key={i}> <Link to={`/country/${country.code}`}> {country.name} </Link>  </li>
            ) : null,
          )}
        </ul>
    </div>
  );
};

export default ContinentProfile;