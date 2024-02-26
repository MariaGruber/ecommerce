import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from './router.tsx';
import { getLocalStorageData } from './utils/localStorage.ts';
import { LOCAL_STORAGE } from './utils/constants.ts';
import './index.css';
import { ShoppingCartProvider } from './contexts/shoppingCartContext.tsx';

const session = getLocalStorageData(LOCAL_STORAGE.SESSION);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ShoppingCartProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </ShoppingCartProvider>
  
);
