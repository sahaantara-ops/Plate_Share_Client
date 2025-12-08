import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../HomeLayout/HomeLayout';


const Router = createBrowserRouter(
    [
      {
         path: "/",
         element: <HomeLayout></HomeLayout>,
      },
       {
         path: "/auth",
         element: <h2>Auth Layout</h2>
      },
       {
         path: "/orders",
         element: <h2>Orders Layout</h2>
      },
]);
export default Router;
    
