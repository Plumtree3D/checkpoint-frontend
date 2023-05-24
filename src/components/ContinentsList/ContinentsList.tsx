import * as React from 'react';
import { ContinentsListQuery } from '../../generated/graphql';
import { Outlet } from "react-router-dom";
import './styles.css';
import { Link } from 'react-router-dom';

interface Props {
  data: ContinentsListQuery;
}

const className = 'LaunchList';

const ContinentList: React.FC<Props> = ({ data }) => (
  <>
  <div className={className}>
    <h3>Launches</h3>
    <ol className={`${className}__list`}>
      {!!data.continents &&
        data.continents.map(
          (continent, i) =>
            !!continent && (
              <li key={i} className={`${className}__item`}>
                <Link to={`continent/${continent.code}`}>{continent.name} ({continent.code})</Link>
              </li>
            ),
        )}
    </ol>
  </div>
  <Outlet />
  </>
);

export default ContinentList;