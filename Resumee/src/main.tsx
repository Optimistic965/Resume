import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import { Provider } from 'react-redux';
import { appStore } from './app/store';
import './index.css'

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={appStore}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);