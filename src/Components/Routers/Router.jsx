import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../../Layouts/HomeLayout/HomeLayout';
import Foods from '../../Pages/Foods/Foods';
import AddPosts from '../AddPosts/AddPosts';
import SignUp from '../../Pages/SignUp/SignUp';
import SignIn from '../../Pages/SignIn/SignIn';
import AuthLayout from '../../Layouts/AuthLayout/AuthLayout';
import PostLayout from '../../Layouts/PostLayout/PostLayout';
import AllFoods from '../../Layouts/AllFoods Layout/AllFoods';
import PrivateRoute from '../PrivateRoutes/PrivateRoutes';
import ModelDetails from '../ModelDatails/ModelDetails';


const Router = createBrowserRouter(
    [
      {
         path: "/",
         element: <HomeLayout></HomeLayout>,
      },
      {
         path:"/allfoods",
         element: <AllFoods></AllFoods>,
         children:[
            {path:"/allfoods",
               element:
               <PrivateRoute>
                <Foods></Foods>
               </PrivateRoute>,
               
               loader:()=>fetch('http://localhost:3000/models')
            },             
         ]

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
         path: "/newposts",
         element:<PostLayout></PostLayout>,
         children:[
            {
               path :"/newposts/addposts",
               element:<PrivateRoute>
                      <AddPosts/>
                     </PrivateRoute>   
                      
            },
         ],
      },
       {
        path: "/models/:id",
        element: (
            
            <ModelDetails />
            
         
        ),
      },
]);
export default Router;
    
