import React from 'react';

import './featuredmovie.css';

function FeaturedMovie({ item }) {
  let BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

  let firstDate = new Date(item.first_air_date);
  
  // Getting genres
  let genres = [];
  for(let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section 
      className="featured" 
      style={{ 
          backgroundImage: `url(${BASE_IMAGE_URL}${item.backdrop_path})`
      }}
    >
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name">
            {item.original_name}
          </div>
          <div className="featured-info">
            <div className="featured-vote_average">
              {item.vote_average} points
            </div>
            <div className="featured-year">
              {firstDate.getFullYear()}
            </div>
            <div className="featured-seasons">
              {item.number_of_seasons} {item.number_of_seasons !== 1 ? 'seasons' : 'season'}
            </div>
            <div className="featured-description">
              {item.overview}
            </div>
            <div className="featured-buttons">
              <a href={`/watch/${item.id}`} className="featured-watch-button">► Watch</a>
              <a href={`/list/add/${item.id}`} className="featured-mylist-button">+ My List</a>
            </div>
            <div className="featured-genres">
              <strong>Genres:</strong> {genres.join(', ')}
            </div>

          </div>
        </div>
      </div>
    </section>
  );

}

export default FeaturedMovie;