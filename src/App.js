import React, { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';

import { getHomeList, getMovieOrSerieInfo }  from './services/services';

import './App.css';

export default function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    // Getting all data
    const loadAll = async () => {
      let list = await getHomeList();
      setMovieList(list);

      // Getting featured Movie/Serie
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await getMovieOrSerieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  return(
    <div className="page">
      {featuredData && 
        <FeaturedMovie 
          item={featuredData}
        />
      }
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