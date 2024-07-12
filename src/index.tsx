import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
const queryClient = new QueryClient();

import Router from '@/config/RouterConfig';

import '@/css/globals.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={Router}/>
        </QueryClientProvider>
    </React.StrictMode>
);
