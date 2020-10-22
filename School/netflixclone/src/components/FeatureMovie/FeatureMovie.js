import React from "react";
import "./FeatureMovie.css";

export default ({item}) => {

  let firstDate = new Date(item.first_air_date);
  let genres = [];
 for (const i in item.genres) {
   genres.push(item.genres[i].name)
 }
 let description = item.overview
 if(description.length > 200){
   description = description.substring(0 ,200) + '...'
 }

  return (
    <section className="feature" style={{
      backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path}`
    }}>
      <div className="feature--vertical">
        <div className="feature--horizontal">
          <div className="feature--name">{item.original_name}</div>
          <div className="feature--info">
            <div className="feature--points">{item.vote_average}</div>
            <div className="feature--year">{firstDate.getFullYear()}</div>
            <div className="feature--seasons">{item.number_of_seasons} {item.number_of_seasons == 1?"Temporada":"Temporadas"}</div>
            <div className="feature--description">{description}</div>
            <div className="feature--buttons">
              <a href={`/watch/${item.id}`} className="feature--watchbutton">Assisir</a>
              <a href={`/list/add/${item.id}`} className="feature--mylistbutton">+ Minha Lista</a>
            </div>
            <div className="feature--genres"><strong>Gênero:{genres.join(',')}</strong>...</div>
          </div>
        </div>
      </div>
    </section>
  );
};
