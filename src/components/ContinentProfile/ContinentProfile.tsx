import * as React from 'react';
import { ContinentsProfileQuery } from '../../generated/graphql';
import { Link } from 'react-router-dom';
import { List, Card } from 'antd';


interface Props {
  data: ContinentsProfileQuery;
}

const className = 'LaunchProfile';

const ContinentProfile: React.FC<Props> = ({ data }) => {
  if (!data.continent) {
    return <div>No launch available</div>;
  }

  return (
    <div>
      <h1 className={`${className}__title`}>
        {data.continent.name}
      </h1>
        <List bordered itemLayout='vertical' grid={{gutter: 16, column: 4}}>
          {data.continent.countries.map((country, i) =>
            country ? (
                <Card key={i}> <Link to={`/country/${country.code}`}> <span style={{fontSize:"2rem"}}> {country.emoji} </span>  <br/> {country.name} </Link>  </Card>
            ) : null,
          )}
        </List>
    </div>
  );
};

export default ContinentProfile;