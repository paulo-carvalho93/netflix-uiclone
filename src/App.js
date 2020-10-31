import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SerieRow from './components/SerieRow';
import FeaturedSerie from './components/FeaturedSerie';

import { getHomeList, getMovieOrSerieInfo }  from './services/services';

import './App.css';
import netflixLoading from './assets/netflix_loading.gif';

export default function App() {
  const [serieList, setSerieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    // Getting all data
    const loadAll = async () => {
      let list = await getHomeList();
      setSerieList(list);

      // Getting featured Movie/Serie
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await getMovieOrSerieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return(
    <div className="page">

      <Header black={blackHeader} />

      {featuredData && 
        <FeaturedSerie 
          item={featuredData}
        />
      }
      <section className="lists">
        {serieList.map((item, index) => (
          <SerieRow 
            key={index} 
            title={item.title} 
            items={item.items}
          />
        ))}
      </section>

      <Footer />

      {serieList.length <= 0 && 
        <div className="loading">
          <img src={netflixLoading} alt="Loading"/>
        </div>
      }
    </div>
  );
}