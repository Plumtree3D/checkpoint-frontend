import * as React from 'react';
import { ContinentsListQuery } from '../../generated/graphql';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import { List } from 'antd';

interface Props {
  data: ContinentsListQuery;
}

const className = 'LaunchList';

const ContinentList: React.FC<Props> = ({ data }) => (
  <>
  <div>
    <List 
    split 
    size='large'
    header={<h1>Continents</h1>}
    >
      {data.continents.map(
          (continent, i) =>
              <List.Item key={i}>
                <Link to={`continent/${continent.code}`}>{continent.name} ({continent.code})</Link>
              </List.Item>
        )}
    </List>
  </div>
  <Outlet />
  </>
);

export default ContinentList;