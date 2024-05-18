import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet, } from "react-router-dom";
import Home from './Home.jsx';
import Header from './Header.jsx'
import LineWomen from './LineWomen.jsx'
import Manstyles from './Manstyles.jsx';
import LoginModal from './LoginModal.jsx';
import Styles from './Styles.jsx';
import Veste from './Veste.jsx';
import CheckoutForm from './CheckoutForm.jsx';
import About from './About.jsx';
import LoginPage from './LoginPage.jsx';
import PaymentPage from './PaymentPage.jsx';
import DetailsForm from './DetailsForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Header /><Outlet /></div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/styles",
        element: <Styles />,
      },
      {
        path: "/womenstyles",
        element: <LineWomen />,
      },
      {
        path: "/Manstyles",
        element: <Manstyles />,
      },
      {
        path: "/LoginModal",
        element: <LoginModal />,
      },
      {
        path: "/Veste",
        element: <Veste />,
      },
      {
        path: "/CheckoutForm",
        element: <DetailsForm />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/LoginPage",
        element: <LoginPage />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
