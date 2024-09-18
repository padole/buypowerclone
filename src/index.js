import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
import About from "./pages/About/About";
import Contact from './pages/Contact/contact';
import Marchant from './pages/Marchant/marchant';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "marchant",
    element: <Marchant/>,
  },
  {
    path: "about",
    element: <About/>,
  },
 
  {
    path: "contact",
    element: <Contact/>,
    },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
