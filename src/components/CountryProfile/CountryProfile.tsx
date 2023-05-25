import * as React from 'react';
import { CountryProfileQuery } from '../../generated/graphql';
import { Card, List } from 'antd';

interface Props {
  data: CountryProfileQuery;
}

const ContinentProfile: React.FC<Props> = ({ data }) => {
  if (!data.country) {
    return <div>No launch available</div>;
  }

  return (
    <Card>
      <h1>
        {data.country.name} ({data.country.code})
      </h1>
      <span style={{fontSize:"6rem"}}> {data.country.emoji} </span>
      <br/>
      
      🏙️ {data.country.capital} <br/>
      🪙 {data.country.currency}
      
      
      <List>
      👄
      {data.country.languages.map((lang) => 
        <li>{lang.name}</li>
      )}
      </List>


    </Card>
  );
};

export default ContinentProfile;