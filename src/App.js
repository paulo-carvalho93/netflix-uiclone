import React, { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow/MovieRow';

import getHomeList from './services/services';

import './App.css';

export default function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await getHomeList();
      console.log(list);
      setMovieList(list);
    }

    loadAll();
  }, []);

  return(
    <div className="page">
      <section className="lists">
        {movieList.map((item, index) => (
          <MovieRow 
            key={index} 
            title={item.title} 
            items={item.items}
          />
        ))}
      </section>
    </div>
  );
}