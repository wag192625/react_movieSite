import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../RootLayout';
import MainPage from '../pages/MainPage';
import MovieList from '../pages/MovieList';
import MoviesDetail from '../pages/MoviesDetail';
import LoginPage from '../pages/LoginPage';
import BookMarkPage from '../pages/bookMarkPage';
import MyPage from '../pages/MyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement :
    children: [
      {
        index: true,
        element: <MainPage></MainPage>,
        // children: [
        //   {
        //     path: '/movieList',
        //     element: <MovieList />,
        //   },
        // ],
      },
      {
        path: '/movieList',
        element: <MovieList />,
      },
      {
        path: '/movieList/:id',
        element: <MoviesDetail />,
      },
      {
        path: '/loginPage',
        element: <LoginPage></LoginPage>,
      },
      {
        path: '/myPage',
        element: <MyPage></MyPage>,
        children: [
          {
            path: '/myPage/bookMarkPage',
            element: <BookMarkPage></BookMarkPage>,
          },
        ],
      },
    ],
  },
]);

export default router;
