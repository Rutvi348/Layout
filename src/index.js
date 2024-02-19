import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TestFirst from './test1';
import Testsecond from './test2';
import Testthird from './test3';
import Testfourth from './test4';
import Testfifth from './test5';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routersss = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/testfirst',
    element: <TestFirst />
  },
  {
    path: '/secondtest',
    element: <Testsecond />
  }, {
    path: '/thirdtest',
    element: <Testthird />
  }, {
    path: '/fourthtest',
    element: <Testfourth />
  }, {
    path: '/fifthtest',
    element: <Testfifth />
  }

])


root.render(
  <>
    <RouterProvider router={routersss}></RouterProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

