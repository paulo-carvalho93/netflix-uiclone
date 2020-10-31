import React from 'react';

import './serierow.css';

export default function SerieRow ({ title, items }) {
  return (
    <div className="serieRow">
      <h2>{title}</h2>
      <div className="serieRow-listarea">
        <div className="serieRow-list">
          {items.results.length > 0 && items.results.map((item, index) => (
            <div key={index} className="serieRow-item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}
