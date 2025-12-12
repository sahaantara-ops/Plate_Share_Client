import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../HomeLayout/HomeLayout';
import Features from '../Features/Features';


const Router = createBrowserRouter(
    [
      {
         path: "/",
         element: <HomeLayout></HomeLayout>,
      },
      {
         path:"/features",
         element: <Features></Features>
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
    
