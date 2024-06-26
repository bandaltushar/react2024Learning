import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from './pages/about';
import Header from './components/Header';
import HotelDetails from './pages/HotelDetails';

const AppLayout = () => {
  return (<>
  <Header />
  <Outlet />
  </>)
}

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/hotel-details/:resId",
        element: <HotelDetails />
      }
    ]
  },
  

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRoute} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
