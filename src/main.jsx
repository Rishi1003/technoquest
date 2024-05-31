import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import TermsAndConditions from './tnc.jsx';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path:"/terms",
        element:<TermsAndConditions/>
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)
