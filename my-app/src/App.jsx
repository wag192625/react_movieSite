import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Provider } from 'react-redux';
import store from './store/store';
export default function App() {
  // console.log('env', import.meta.env);
  console.log('env', import.meta.env.VITE_TMDB_URL);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}
