import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router';
import Router from './Components/Routers/Router.jsx';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Context/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={Router}/>
      <ToastContainer />
    </AuthProvider>
   </StrictMode>,
)
