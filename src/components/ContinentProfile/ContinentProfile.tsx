import * as React from 'react';
import { ContinentsProfileQuery } from '../../generated/graphql';
import './styles.css';

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
        <div className={`${className}__image-list`}>
          {data.continent.countries.map((country, i) =>
            country ? (
                country.name
            ) : null,
          )}
        </div>
    </div>
  );
};

export default ContinentProfile;