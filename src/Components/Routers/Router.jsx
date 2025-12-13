import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../../Layouts/HomeLayout/HomeLayout';
import Features from '../Features/Features';

import Register from '../../Pages/Register/Register';
import LogIn from '../../Pages/LogIn/LogIn';


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
         element: <h2>Auth Layout</h2>,
         children:[
            {path:"auth/logIn",
            element:<LogIn></LogIn>
            },
            {
               path:"auth/register",
               element:<Register></Register>
            }
         ]
      },
       {
         path: "/orders",
         element: <h2>Orders Layout</h2>
      },
]);
export default Router;
    
