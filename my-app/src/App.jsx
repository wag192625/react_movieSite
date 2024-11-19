import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

export default function App() {
  // console.log('env', import.meta.env);
  console.log('env', import.meta.env.VITE_TMDB_URL);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
