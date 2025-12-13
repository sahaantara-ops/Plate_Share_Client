import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../../Layouts/HomeLayout/HomeLayout';
import Features from '../Features/Features';

import SignUp from '../../Pages/SignUp/SignUp';
import SignIn from '../../Pages/SignIn/SignIn';
import AuthLayout from '../../Layouts/AuthLayout/AuthLayout';



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
         element: <AuthLayout></AuthLayout>,
         children:[
            {path:"/auth/signin",
             element:<SignIn></SignIn>
            },
            {
               path:"/auth/signup",
               element:<SignUp></SignUp>
            },
         ],
      },
       {
         path: "/orders",
         element: <h2>Orders Layout</h2>
      },
]);
export default Router;
    
