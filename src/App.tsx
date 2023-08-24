import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootPage from './pages/root/root-page';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
