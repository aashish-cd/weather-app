import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../Components/NotFound';
import App from '../App';
import Weather from '../Components/Weather';

// router.jsx file is the base section where all routes is been created*******
const CreateRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/weather',
    element: <Weather />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
export default CreateRouter;
