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
    <h1>Continents</h1>
    <List split size='large'>
      {!!data.continents &&
        data.continents.map(
          (continent, i) =>
            !!continent && (
              <li key={i}>
                <Link to={`continent/${continent.code}`}>{continent.name} ({continent.code})</Link>
              </li>
            ),
        )}
    </List>
  </div>
  <Outlet />
  </>
);

export default ContinentList;