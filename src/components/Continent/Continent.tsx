import * as React from 'react';
import { useState } from 'react';
import { ContinentsProfileQuery } from '../../generated/graphql';
import { Link } from 'react-router-dom';
import { List, Card, Input } from 'antd';


interface Props {
  data: ContinentsProfileQuery;
}

const className = 'LaunchProfile';

const ContinentProfile: React.FC<Props> = ({ data }) => {
  const [query, setQuery] = useState("")
  if (!data.continent) {
    return <div>No data</div>;
  }

  return (
    <div>
      <List
        header={ <><h1> {data.continent.name} </h1> 
        <Input style={{ maxWidth:450}} allowClear onChange={event => setQuery(event.target.value)}/>
        </>}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={data.continent.countries.filter(country => {
          if (query === '') {
            return country;
          } else if (country.name.toLowerCase().includes(query.toLowerCase()) || country.code.toLowerCase().includes(query.toLowerCase())) {
            return country;
          }})
        }
        renderItem={(country) => (
          <List.Item>
            <Link to={`/country/${country.code}`}> 
              <Card title={country.name}>  <span style={{fontSize:"2rem"}}> {country.emoji} </span>  </Card>
            </Link> 
          </List.Item>
        )}
      />
    </div>
  );
};

export default ContinentProfile;