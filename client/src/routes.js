import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './Components/DashboardLayout';
import MainLayout from './Components/MainLayout';
import Account from './pages/Account';
import TasksList from './pages/TasksList';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Settings from './pages/Settings';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      {
        path: 'account', element: <Account />
      },
      {
        path: 'tasks', element: <TasksList />
      },
      {
        path: 'dashboard', element: <Dashboard />
      },
      {
        path: 'products', element: <ProductList />
      },
      {
        path: 'settings', element: <Settings />
      },
      {
        path: '*', element: <Navigate to="/404" />
      }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'login', element: <Login />
      },
      {
        path: 'register', element: <Register />
      },
      {
        path: '404', element: <NotFound />
      },
      {
        path: '/', element: <Navigate to="/app/dashboard" />
      },
      {
        path: '*', element: <Navigate to="/404" />
      }
    ]
  }
];

export default routes;
