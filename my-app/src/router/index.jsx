import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../RootLayout';
import MainPage from '../pages/MainPage';
import Movie from '../pages/Movie';
import MoviesDetail from '../pages/MoviesDetail';
import LoginPage from '../pages/LoginPage';
import BookMarkPage from '../pages/bookMarkPage';
import MyPage from '../pages/MyPage';
import MoreMoviePage from '../pages/MoreMoviePage';
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
        path: '/movie',
        element: <Movie />,
      },
      {
        path: `/movie/category/:category`,
        element: <MoreMoviePage />,
      },
      {
        path: `/movie/:id`,
        element: <MoviesDetail />,
      },
      {
        path: '/loginPage',
        element: <LoginPage />,
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
