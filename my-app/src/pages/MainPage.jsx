import React from 'react';
import MovieList from './MovieList';
export default function Main() {
  const categorys = ['now_playing', 'popular', 'top_rated', 'upcoming'];

  // const movieLists = categorys.map((el) => {
  //   console.log('카테고리 = ', el);
  //   return <MovieList key={el} category={el}></MovieList>;
  // });

  return (
    <div style={{ width: '100vw' }}>
      <div>Main</div>
      {categorys.map((el) => {
        console.log('카테고리 = ', el);
        return <MovieList key={el} category={el}></MovieList>;
      })}
      {/* <div>{movieLists}</div> */}

    </div>
  );
}
