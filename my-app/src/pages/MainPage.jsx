import React from 'react';
import Movie from './Movie';
export default function Main() {
  const categorys = ['now_playing', 'popular', 'top_rated', 'upcoming'];

  // const movies = categorys.map((el) => {
  //   console.log('카테고리 = ', el);
  //   return <Movie key={el} category={el}></Movie>;
  // });

  return (
    <div style={{ width: '100vw' }}>
      <div>Main</div>
      {categorys.map((el) => {
        console.log('카테고리 = ', el);
        return <Movie key={el} category={el}></Movie>;
      })}
      {/* <div>{movies}</div> */}
    </div>
  );
}
