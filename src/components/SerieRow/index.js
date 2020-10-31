import React, { useState } from 'react';
import './serierow.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export default function SerieRow ({ title, items }) {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x);
  }

  return (
    <div className="serieRow">
      <h2>{title}</h2>

      <div className="serieRow-left" onClick={handleLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="serieRow-right" onClick={handleRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="serieRow-listarea">
        <div className="serieRow-list" style={{ 
            marginLeft: scrollX,
            width: items.results.length * 150
          }}>
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
