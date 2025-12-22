import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../../Layouts/HomeLayout/HomeLayout';
import Foods from '../../Pages/Foods/Foods';
import AddPosts from '../AddPosts/AddPosts';
import SignUp from "../../Pages/SignUp/SignUP";

import SignIn from '../../Pages/SignIn/SignIn';
import AuthLayout from '../../Layouts/AuthLayout/AuthLayout';
import PostLayout from '../../Layouts/PostLayout/PostLayout';
import AllFoods from '../../Layouts/AllFoods Layout/AllFoods';
import PrivateRoute from '../PrivateRoutes/PrivateRoutes';
import ModelDetails from '../ModelDatails/ModelDetails';
import UpdatePost from '../../Pages/UpdatePost/UpdatePost';
import Home from '../Home/Home';
import AvailableFoods from '../AvailableFoods/AvailableFoods';
import Errorpage from '../ErrorPage/Errorpage';


const Router = createBrowserRouter(
    [
      {
         path: "/",
         element: <HomeLayout></HomeLayout>,
         children:[
            {
               path:"/",
               element:
               <PrivateRoute>
               <Home></Home>
               </PrivateRoute>,
              loader: async () => {
        const res = await fetch("https://server-ten-teal-26.vercel.app/latest-food");
        if (!res.ok) throw new Error("Failed to fetch latest food");
        const data = await res.json(); // parse JSON
        return data;
            },
         }
         ]
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
               
               loader:()=>fetch('https://server-ten-teal-26.vercel.app/models')
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
        path: "/model-details/:id",
        element: (
            <PrivateRoute>
             <ModelDetails />
            </PrivateRoute>
        ),
           
      },
      {
         path:"/update-post/:id",
         element:(
            <PrivateRoute>
               <UpdatePost></UpdatePost>
            </PrivateRoute>
         ),
         loader: ({params}) => fetch(`https://server-ten-teal-26.vercel.app/models/${params.id}`)
      },
     {
      path:"/availablefoods",
      element:<AvailableFoods/>,
       loader:()=>fetch('https://server-ten-teal-26.vercel.app/availablefoods')
    },
    {
      path:"*",
      element:<Errorpage></Errorpage>
    }
    

]);
export default Router;
    
