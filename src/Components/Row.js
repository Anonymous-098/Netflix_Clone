import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./Row.module.css";

const Row = (props) => {
  const image_url = "https://image.tmdb.org/t/p/original";
  const base_url = "https://api.themoviedb.org/3";
  const url = base_url + props.fetchUrl;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(url);
      const data = await response.data;
      const results = await data.results;
      setMovies(results);
    };
    getMovies();
  }, []);

  return (
    <div className={classes.row}>
      <h2>{props.title}</h2>
      <div className={classes.posters}>
        {movies.map((movie) => {
          return (
              <img key={movie.id} src={`${image_url}${movie.poster_path}`} className={classes.poster}></img>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
