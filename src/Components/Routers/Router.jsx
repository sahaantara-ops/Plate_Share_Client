import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../../Layouts/HomeLayout/HomeLayout';
import Features from '../Features/Features';
import AddPosts from '../AddPosts/AddPosts';
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
         path: "/addposts",
         element:<AddPosts></AddPosts> 
      },
]);
export default Router;
    
