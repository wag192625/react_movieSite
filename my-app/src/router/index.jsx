import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../RootLayout';
import MainPage from '../pages/MainPage';
import Movie from '../pages/Movie';
import MoviesDetail from '../pages/MoviesDetail';
import LoginPage from '../pages/LoginPage';
import BookMarkPage from '../pages/BookMarkPage';
import MyPage from '../pages/MyPage';
import MoreMoviePage from '../pages/MoreMoviePage';
import SearchPage from '../pages/SearchPage';

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
      {
        path: '/search/movie/:text',
        element: <SearchPage></SearchPage>,
      },
    ],
  },
]);

export default router;
