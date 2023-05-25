import * as React from 'react';
import { CountryProfileQuery } from '../../generated/graphql';
import { Card, List } from 'antd';

interface Props {
  data: CountryProfileQuery;
}

const CountryAttributes: React.FC<Props> = ({ data }) => {
  if (!data.country) {
    return <div>No data for this country</div>;
  }
  const { country } = data;
  return (
    <Card title={<h1> {country.name} ({country.code})</h1>}>
      <span style={{fontSize:"6rem"}}> {country.emoji} </span>
      <br/>
      {country.capital && <span>🏙️ {country.capital} </span>} <br/>
      {country.currency && <span>🪙 {country.currency} </span>}
      <List>
        {country.languages.length > 0 && <>
          👄
          {country.languages.map((lang) => 
            <li>{lang.name}</li>
          )}</>}
      </List>
    </Card>
  );
};

export default CountryAttributes;