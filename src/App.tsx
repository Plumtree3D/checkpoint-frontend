import * as React from 'react';
import ContinentsList from './components/ContinentsList';
import ContinentProfile from './components/ContinentProfile';
import ErrorPage from './errorPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContinentsList />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/continent/:continentID",
    element: <ContinentProfile/>,
  }
]);

const App = () => {
  return (
    <div className="App">
         <RouterProvider router={router} />
    </div>
  );
};

export default App;