import React from 'react';
import { createBrowserRouter } from 'react-router';

const Router = createBrowserRouter(
    [
      {
         path: "/",
         element: <h2>Home Layout</h2>
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
    
